import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { IDetailedProposition, IPropositionsResponse } from '../../interfaces/IProposition';
import { single } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-proposition-detailed',
  styleUrl: './proposition-detailed.css',
  templateUrl: './proposition-detailed.html',
})
export class PropositionDetailed {
  
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data);

  readonly response = computed(() => this.data()?.['proposition'] as IPropositionsResponse<IDetailedProposition>);

}
