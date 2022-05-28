import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceCardComponent } from './shared/components/invoice-card/invoice-card.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { InvoiceFormComponent } from './shared/components/invoice-form/invoice-form.component';

const routes: Routes = [
  {path: 'invoice-card', component: InvoiceCardComponent},
  {path: 'header', component: HeaderComponent}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'form', component: InvoiceFormComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
