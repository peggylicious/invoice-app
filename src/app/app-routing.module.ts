import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceCardComponent } from './components/invoice-card/invoice-card.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  {path: 'invoice-card', component: InvoiceCardComponent},
  {path: 'header', component: HeaderComponent}, 
  {path: 'home', component: HomeComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
