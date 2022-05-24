import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusButtonComponent } from './components/status-button/status-button.component';



@NgModule({
  declarations: [
    StatusButtonComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusButtonComponent
  ]
})
export class SharedModule { }
