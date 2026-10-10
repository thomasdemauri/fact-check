import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { IDeputyResponse } from '../../interfaces/IDeputy';

@Component({
  imports: [DatePipe],
  selector: 'app-deputy-detailed',
  styleUrl: './deputy-detailed.css',
  templateUrl: './deputy-detailed.html',
})
export class DeputyDetailed {

  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data);

  readonly response = computed(() => this.data()?.['deputy'] as IDeputyResponse);

}
