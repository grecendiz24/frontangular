import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { Directiva2Component } from './components/directiva2/directiva2.component';
import { ClienteComponent } from './components/cliente/cliente.component';

import { RouterModule,Routes} from '@angular/router';

const router:Routes=[
  {path:'',redirectTo:'/clientes',pathMatch:'full'},
  {path:'directivas',component:DirectivaComponent},
  {path:'clientes',component:ClienteComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DirectivaComponent,
    Directiva2Component,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
