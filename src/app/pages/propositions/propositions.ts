import { Component, computed, inject, signal } from '@angular/core';
import { IPropositionsResponse } from '../../interfaces/IProposition';
import { Card } from '../../components/general/card/card';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [Card],
  selector: 'app-propositions',
  styleUrl: './propositions.css',
  templateUrl: './propositions.html',
})
export class Propositions {

  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data);

  readonly response = computed(() => this.data()?.['propositions'] as IPropositionsResponse);

  constructor() {
    console.log(this.data);
  }
}
