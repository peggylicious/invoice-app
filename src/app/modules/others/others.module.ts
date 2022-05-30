import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersComponent } from './others.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OthersRoutingModule } from './others-routing.module';



@NgModule({
  declarations: [
    OthersComponent
  ],
  imports: [
    CommonModule, 
    OthersRoutingModule,
    SharedModule
  ]
})
export class OthersModule { }
