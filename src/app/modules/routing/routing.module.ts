import { BooksListComponent } from './../../components/books-list/books-list.component';
import { EditComponent } from './../../components/edit/edit.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { BooksService } from './../../services/books/books.service';
import { AppComponent } from './../../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksResolveService } from '../../services/books.resolver/books.service';

const appRoute: Routes = [
  {
    path: 'books', component: BooksListComponent,
    resolve: {
      books: BooksResolveService
    }
  },
  {
    path: 'books/:id', redirectTo: '/books'
  },
  {
    path: 'edit/:id', component: EditComponent
  },
  { path: 'edit', redirectTo: '/books' },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', component: BooksListComponent }
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
  constructor() {

  };
}

