import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InvoiceCardComponent } from 'src/app/components/invoice-card/invoice-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    // InvoiceCardComponent
  ],
  imports: [
    CommonModule, 
    InvoiceCardComponent
  ],
  // providers: [InvoiceCardComponent]
})
export class HomeModule { }
