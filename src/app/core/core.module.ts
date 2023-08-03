import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MaterialModule } from '../shared/mat-materials.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ]
})
export class CoreModule { }
