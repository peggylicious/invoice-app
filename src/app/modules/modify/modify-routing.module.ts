import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditInvoiceComponent } from './components/edit-invoice/edit-invoice.component';
import { ModifyComponent } from './modify.component';

const routes: Routes = [
  {
    path: '',
    component: ModifyComponent,
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'edit/:id', component: EditInvoiceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyRoutingModule {}
