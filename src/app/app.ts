import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toolbar, ToolbarWidget} from '@angular/aria/toolbar';

@Component({
  imports: [RouterOutlet, Toolbar, ToolbarWidget],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('fact-check');
}
