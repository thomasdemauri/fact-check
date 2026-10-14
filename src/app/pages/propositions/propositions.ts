import { Component, computed, debounced, inject, linkedSignal, signal } from '@angular/core';
import { Card } from '../../components/general/card/card';
import { rxResource } from '@angular/core/rxjs-interop';
import { ChamberDeputies } from '../../services/chamber-deputies';
import { IPropositionFilter, IPropositionsResponse, LinkTypes } from '../../interfaces/IProposition';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { IDeputiesFilter } from '../../interfaces/IDeputy';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  imports: [
    Card, 
    MatProgressBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,],
  selector: 'app-propositions',
  styleUrl: './propositions.css',
  templateUrl: './propositions.html',
})
export class Propositions {
  private readonly service = inject(ChamberDeputies);

  protected filter = signal<IPropositionFilter>({
    itens: 15,
    pagina: 1,
    ordem: 'DESC',
    ordenarPor: 'ano',
  });

  protected deputiesFilter = signal<IDeputiesFilter>({
    itens: 10,
    ordenarPor: 'nome',
    nome: ''
  });
  
  finalDeputyNameTrigger = signal<string>('');
  queryDeputyName = signal<string>('');
  readonly debouncedQuery = debounced(
    () => this.queryDeputyName(),
    300
  );

  readonly deputiesResource = rxResource({
  params: () => ({
    ...this.deputiesFilter(),
    nome: this.debouncedQuery.value() ?? '',
  }),
    stream: ({ params }) => this.service.getDeputies(params)
  });

  protected deputiesData = computed(() => this.deputiesResource.value()?.dados)

  readonly response = rxResource({
    params: () => ({
      ...this.filter(),
      autor: [ this.finalDeputyNameTrigger() ]
    }),
    stream: ({ params }) => this.service.getPropositions(params),
  });

  protected data = linkedSignal<IPropositionsResponse | undefined, IPropositionsResponse | undefined>({
    source: this.response.value,
    computation: (value, previous) => value ?? previous?.value,
  });

  propositions = computed(() => this.data()?.dados);
  links = computed(() => this.data()?.links);

  lastPage = computed(() => {
    return this.getPage(LinkTypes.Last);
  });

  previousPage = computed(() => {
    return this.getPage(LinkTypes.Previous);
  });

  nextPage = computed(() => {
    return this.getPage(LinkTypes.Next);
  });

  firstPage = computed(() => {
    return this.getPage(LinkTypes.First);
  });

  goTo(pageNumber: number | null) {
    if (pageNumber == null) {
      return;
    }

    this.changePage(pageNumber!);
  }

  private getPage(rel: LinkTypes) {
    const href = this.links()?.find(l => l.rel == rel)?.href;

    if (!href) {
      return null;
    }

    return Number(new URL(href).searchParams.get('pagina'));
  }

  private changePage(page: number) {
    this.filter.update(f => ({ ...f, pagina: page }));
  }

  private setItens(items: number) {
    this.filter.update(f => ({ ...f, itens: items, pagina: 1 }));
  }

  private setFinalDeputyNameForTrigger(event: MatAutocompleteSelectedEvent) {
    this.finalDeputyNameTrigger.set(event.option.value);
  }

}
