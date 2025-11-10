import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module'; 

@Component({
    selector: 'app-sidenav',
    imports: [CommonModule, RouterModule, MaterialModule],
    template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/">Home</a>
      <a mat-list-item routerLink="/incidents">Incidents</a>
    </mat-nav-list>
  `,
    styles: [``]
})
export class SidenavComponent {

}
