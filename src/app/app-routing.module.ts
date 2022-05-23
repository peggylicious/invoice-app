import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceCardComponent } from './components/invoice-card/invoice-card.component';

const routes: Routes = [
  {path: 'invoice-card', component: InvoiceCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
