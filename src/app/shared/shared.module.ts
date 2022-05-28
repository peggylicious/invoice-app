import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusButtonComponent } from './components/status-button/status-button.component';
import { HeaderComponent } from './components/header/header.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceCardComponent } from './components/invoice-card/invoice-card.component';


@NgModule({
  declarations: [
    StatusButtonComponent,
    InvoiceFormComponent, 
    InvoiceCardComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusButtonComponent, 
    HeaderComponent, 
    InvoiceCardComponent
  ]
})
export class SharedModule { }
