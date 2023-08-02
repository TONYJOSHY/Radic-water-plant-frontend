import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
