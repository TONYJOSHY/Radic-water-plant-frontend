import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MATMODULES = [
    MatFormFieldModule,
    MatInputModule
]

@NgModule({
    imports: [MATMODULES],
    exports: [MATMODULES]
})
export class MaterialModule { }