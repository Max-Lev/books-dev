import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routingModule } from './modules/routing/routing.module';
import { BookComponent } from './components/book/book.component';
import { BooksResolveService } from '../app/services/books.resolver/books.service';
import { BooksService } from '../app/services/books/books.service';
import { EditComponent } from './components/edit/edit.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { DateConverterPipe } from './filters/date-converter.pipe';
import { ReactiveFormsModule,FormControl,FormGroup } from '@angular/forms';
import { BookNamePipe } from './filters/book-name.pipe';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    EditComponent,
    BooksListComponent,
    DateConverterPipe,
    BookNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routingModule,
    ReactiveFormsModule
  ],
  providers: [BooksResolveService, BooksService,DateConverterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
