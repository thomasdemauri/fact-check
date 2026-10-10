import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {Toolbar, ToolbarWidget} from '@angular/aria/toolbar';

@Component({
  imports: [RouterOutlet, Toolbar, ToolbarWidget],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('fact-check');
  protected readonly showDeputySearch = signal(false);

  private router = inject(Router);

  searchDeputy(id: string) {
    if (!id) return;
    this.router.navigate(['deputies', id]);
  }

  goToPropositions() {
    this.router.navigate(['']);
  }
}
