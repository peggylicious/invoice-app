import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusButtonComponent } from './components/status-button/status-button.component';
import { HeaderComponent } from './components/header/header.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceCardComponent } from './components/invoice-card/invoice-card.component';
import { FooterButtonComponent } from './components/footer-button/footer-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StatusButtonComponent,
    InvoiceFormComponent, 
    InvoiceCardComponent, 
    HeaderComponent, 
    FooterButtonComponent, FooterComponent, DeleteModalComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    StatusButtonComponent, 
    HeaderComponent, 
    InvoiceCardComponent, 
    FooterButtonComponent, 
    FooterComponent, 
    InvoiceFormComponent, 
    DeleteModalComponent
  ]
})
export class SharedModule { }
