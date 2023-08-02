import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpServiceInterceptor } from '../shared/interceptor/http-service.interceptor';


@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: HttpServiceInterceptor, multi: true }
  // ]
})
export class FeaturesModule { }
