import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultRoutingModule } from './default-routing.module';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    DefaultRoutingModule
  ]
})
export class DefaultModule { }
