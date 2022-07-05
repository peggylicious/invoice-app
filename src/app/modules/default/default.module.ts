import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultRoutingModule } from './default-routing.module';
import { HomeModule } from '../home/home.module';
import { ModifyModule } from '../modify/modify.module';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    HomeModule,
    DefaultRoutingModule, 
    ModifyModule
  ]
})
export class DefaultModule { }
