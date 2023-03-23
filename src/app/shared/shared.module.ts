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
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { InvoiceModalComponent } from './components/invoice-modal/invoice-modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    StatusButtonComponent,
    InvoiceFormComponent, 
    InvoiceCardComponent, 
    HeaderComponent, 
    FooterButtonComponent, FooterComponent, DeleteModalComponent, GoBackButtonComponent, InvoiceModalComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, MatMenuModule,MatIconModule, MatDialogModule
  ],
  exports: [
    StatusButtonComponent, 
    HeaderComponent, 
    InvoiceCardComponent, 
    FooterButtonComponent, 
    FooterComponent, 
    InvoiceFormComponent, 
    DeleteModalComponent,
    GoBackButtonComponent
  ],
  entryComponents:[InvoiceModalComponent]
})
export class SharedModule { }
