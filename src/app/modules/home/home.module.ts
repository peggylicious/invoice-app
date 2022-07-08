import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceCardComponent } from 'src/app/shared/components/invoice-card/invoice-card.component';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';
import { RouterModule } from '@angular/router';
// import { HeaderComponent } from 'src/app/shared/components/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    ViewInvoiceComponent,
    // InvoiceCardComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule
    // InvoiceCardComponent, 
    // HeaderComponent,
    
  ],
  // providers: [InvoiceCardComponent]
})
export class HomeModule { }
