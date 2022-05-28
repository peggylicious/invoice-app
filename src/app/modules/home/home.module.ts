import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceCardComponent } from 'src/app/shared/components/invoice-card/invoice-card.component';
// import { HeaderComponent } from 'src/app/shared/components/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    // InvoiceCardComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    // InvoiceCardComponent, 
    // HeaderComponent,
    
  ],
  // providers: [InvoiceCardComponent]
})
export class HomeModule { }
