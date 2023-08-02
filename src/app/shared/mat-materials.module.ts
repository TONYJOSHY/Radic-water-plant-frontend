import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const MATMODULES = [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
]

@NgModule({
    imports: [MATMODULES],
    exports: [MATMODULES]
})
export class MaterialModule { }