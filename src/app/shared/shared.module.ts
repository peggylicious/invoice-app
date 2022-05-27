import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusButtonComponent } from './components/status-button/status-button.component';
import { HeaderComponent } from './components/header/header.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';



@NgModule({
  declarations: [
    StatusButtonComponent,
    HeaderComponent,
    InvoiceFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusButtonComponent, 
    HeaderComponent
  ]
})
export class SharedModule { }
