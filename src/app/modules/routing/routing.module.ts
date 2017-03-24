import { Routes, RouterModule } from '@angular/router';
import { BooksService } from './../../services/books/books.service';
import { AppComponent } from './../../app.component';
import { BookComponent } from './../../components/book/book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksResolveService } from '../../services/books.resolver/books.service';

const appRoute: Routes = [
  {
    path: 'books', component: BookComponent,
    resolve: {
      books: BooksResolveService
    }
  },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports:
  [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [BooksResolveService],
  exports: [RouterModule],
  declarations: []
})
export class routingModule {
  constructor() { }
}


