import { Component, computed, debounced, inject, output, signal } from '@angular/core';
import { IDeputiesFilter } from '../../../interfaces/IDeputy';
import { rxResource } from '@angular/core/rxjs-interop';
import { ChamberDeputies } from '../../../services/chamber-deputies';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@Component({
  imports: [ 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule],
  selector: 'app-deputy-filter',
  styleUrl: './deputy-filter.css',
  templateUrl: './deputy-filter.html',
})
export class DeputyFilter {
  private readonly service = inject(ChamberDeputies);

  deputySelected = output<string>();

  protected onDeputySelected(event: MatAutocompleteSelectedEvent) {
    this.deputySelected.emit(event.option.value);
  }
  
  protected deputiesFilter = signal<IDeputiesFilter>({
    itens: 10,
    ordenarPor: 'nome',
    nome: ''
  });

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
}
