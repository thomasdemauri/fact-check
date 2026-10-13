import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { Card } from '../../components/general/card/card';
import { rxResource } from '@angular/core/rxjs-interop';
import { ChamberDeputies } from '../../services/chamber-deputies';
import { IPropositionFilter, IPropositionsResponse, LinkTypes } from '../../interfaces/IProposition';

@Component({
  imports: [Card],
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

  readonly response = rxResource({
    params: () => this.filter(),
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

}
