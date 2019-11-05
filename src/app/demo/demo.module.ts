import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
