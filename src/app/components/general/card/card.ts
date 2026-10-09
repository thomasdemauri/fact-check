import { Component, inject, input, signal } from '@angular/core';
import { IProposition } from '../../../interfaces/IProposition';
import { DatePipe } from '@angular/common';
import { PROPOSITIONS_LOOKUP, PropositionDetail } from '../../../lookups/propositionType';
import {Router} from '@angular/router';

@Component({
  imports: [DatePipe],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  private router = inject(Router);
  readonly proposition = input<IProposition>();

  getIdentification() {
    return `${this.proposition()?.siglaTipo} ${this.proposition()?.numero}/${this.proposition()?.ano}`;
  }

  getPropositionType(id: number | undefined): PropositionDetail | undefined {
    if (id === undefined) return undefined;
    return PROPOSITIONS_LOOKUP[id as keyof typeof PROPOSITIONS_LOOKUP];
  }

  navigateToDetails() {
    this.router.navigate(['propositions', this.proposition()?.id]);
  }
}
