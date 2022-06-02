import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifyRoutingModule } from './modify-routing.module';
import { ModifyComponent } from './modify.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateComponent } from './components/create/create.component';
import { EditInvoiceComponent } from './components/edit-invoice/edit-invoice.component';


@NgModule({
  declarations: [
    ModifyComponent,
    CreateComponent,
    EditInvoiceComponent
  ],
  imports: [
    CommonModule,
    ModifyRoutingModule, 
    SharedModule
  ]
})
export class ModifyModule { }
