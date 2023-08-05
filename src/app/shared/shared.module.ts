import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './mat-materials.module';
import { NgChartsModule } from 'ng2-charts';
import { SearchBoxComponent } from './shared-component/search-box/search-box.component';
import { SelectBoxComponent } from './shared-component/select-box/select-box.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchBoxComponent,
    SelectBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgChartsModule
  ],
  exports: [
    MaterialModule,
    NgChartsModule,
    SelectBoxComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
