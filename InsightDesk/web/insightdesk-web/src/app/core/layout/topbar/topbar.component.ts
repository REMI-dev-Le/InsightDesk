import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module'; 

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  template: `
    <mat-toolbar>
      <button type="button" aria-label="Menu" (click)="toggle?.()">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="brand">InsightDesk</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/">Home</a>
      <a mat-button routerLink="/incidents">Incidents</a>
    </mat-toolbar>
  `,
  styles: [`.spacer{flex:1} .brand{margin-left:.5rem;font-weight:600}`]
})
export class TopbarComponent {
toggle?: () => void;
}
