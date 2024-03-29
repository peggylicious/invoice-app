import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
// import { InvoiceCardComponent } from './shared/components/invoice-card/invoice-card.component';
import { SharedModule } from './shared/shared.module';
import { TestComponent } from './components/test/test.component';
import { OthersModule } from './modules/others/others.module';
import { ModifyModule } from './modules/modify/modify.module';
import { DefaultModule } from './modules/default/default.module';
import { DefaultComponent } from './modules/default/default.component';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/guard/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { PreviousUrlService } from './shared/services/previous-url.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
export function tokenGetter() {
  console.log("Abbbbbb")
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PageNotFoundComponent,
    // DefaultComponent
    // InvoiceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    SharedModule, 
    HomeModule, 
    OthersModule, 
    ModifyModule, 
    HttpClientModule, 
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultModule, 
    JwtModule.forRoot({
      config: {
        tokenGetter: function () {
          console.log("Abbbbbb")
          return localStorage.getItem("access_token");
        },
        allowedDomains: ["invoice-api-0.herokuapp.com", "localhost:4315", "localhost:3000", 'invoice-server-187l.onrender.com'],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }), 
    BrowserAnimationsModule, 
    MatMenuModule,
    MatIconModule
  ],
  providers: [AuthGuard, PreviousUrlService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
 },],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
