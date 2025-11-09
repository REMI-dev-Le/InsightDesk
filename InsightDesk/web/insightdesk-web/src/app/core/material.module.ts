import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule,MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MATERIAL = [
  MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule,
  MatListModule, MatSnackBarModule, MatProgressBarModule
];

@NgModule({ imports: MATERIAL, exports: MATERIAL })

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
