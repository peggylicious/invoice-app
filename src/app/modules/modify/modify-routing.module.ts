import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ModifyComponent } from './modify.component';

const routes: Routes = [
  { path: '', component: ModifyComponent, 
  children: [{ path: 'create', component: CreateComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifyRoutingModule { }
