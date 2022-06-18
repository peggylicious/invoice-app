import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersModule } from './modules/others/others.module';
import { InvoiceCardComponent } from './shared/components/invoice-card/invoice-card.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { InvoiceFormComponent } from './shared/components/invoice-form/invoice-form.component';
import { FooterButtonComponent } from './shared/components/footer-button/footer-button.component';
import { OthersComponent } from './modules/others/others.component';
import { ModifyModule } from './modules/modify/modify.module';
import { ViewInvoiceComponent } from './modules/home/components/view-invoice/view-invoice.component';
import { DeleteModalComponent } from './shared/components/delete-modal/delete-modal.component';

const routes: Routes = [
  {path: 'invoice-card', component: InvoiceCardComponent},
  {path: 'header', component: HeaderComponent}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'form', component: InvoiceFormComponent}, 
  {path: 'button', component: FooterButtonComponent},
  {path: 'view-invoice/:id', component: ViewInvoiceComponent},
  {path: 'modal', component: DeleteModalComponent},
  {
    path: 'others',
    loadChildren: () => import('./modules/others/others.module').then(m => m.OthersModule)
  },
  { path: 'modify', loadChildren: () => import('./modules/modify/modify.module').then(m => m.ModifyModule) },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
