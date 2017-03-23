import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routingModule} from './modules/routing/routing.module';
import { LoginComponent } from './components/login/login.component';
import {BookComponent} from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
