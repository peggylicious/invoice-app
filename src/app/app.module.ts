import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
// import { InvoiceCardComponent } from './shared/components/invoice-card/invoice-card.component';
import { SharedModule } from './shared/shared.module';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    // InvoiceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule, 
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
