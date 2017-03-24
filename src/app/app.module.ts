import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routingModule } from './modules/routing/routing.module';
import { BookComponent } from './components/book/book.component';
import { BooksResolveService } from '../app/services/books.resolver/books.service';
import { BooksService } from '../app/services/books/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routingModule
  ],
  providers: [BooksResolveService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
