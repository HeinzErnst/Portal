import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'
import { AuthService } from './user/auth.service';
import { AlertModule } from './../../node_modules/ngx-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(), 
	  RouterModule.forRoot(appRoutes)],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
