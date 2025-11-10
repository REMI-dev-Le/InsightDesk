import { Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { TopbarComponent } from '../topbar/topbar.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
    selector: 'app-shell',
    imports: [CommonModule, MatSidenavModule, RouterOutlet, TopbarComponent, SidenavComponent],
    template: `
    <mat-sidenav-container class="container">
      <mat-sidenav #drawer mode="side" [opened]="true" class="side">
        <app-sidenav></app-sidenav>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-topbar></app-topbar>
        <main class="content">
          <router-outlet/>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
    styles: []
})
export class ShellComponent {
 @ViewChild('drawer') drawer?: MatSidenav;
  ngAfterViewInit() {
    // wire topbar menu button
    const top = document.querySelector('app-topbar') as any;
    if (top) top.toggle = () => this.drawer?.toggle();
  }
}
