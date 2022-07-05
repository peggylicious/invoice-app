import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewInvoiceComponent } from '../home/components/view-invoice/view-invoice.component';
import { HomeComponent } from '../home/home.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path: '', //Not named so that children routes appear  as desired e.g localhost:4321/home instead of localhost:4321/default/home
    component: DefaultComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'view-invoice/:id', component: ViewInvoiceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
