
 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterButtonComponent } from 'src/app/shared/components/footer-button/footer-button.component';
import { OthersComponent } from './others.component';


const routes: Routes = [
    {   path: 'footer',   component: FooterButtonComponent   },
    {   path: '',   component: OthersComponent   },
    // {   path: 'dashboard',   component: DashboardComponent   },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OthersRoutingModule { }