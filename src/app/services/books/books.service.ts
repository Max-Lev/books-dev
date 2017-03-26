import { Router } from '@angular/router';
import { Book } from './../../components/book/book.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
@Injectable()
export class BooksService {

  constructor(private router: Router) { }

  list: Array<any>;
  setBooks(list: any) {
    this.list = [];
    this.list = list;
  }

  getBooks(): any {
    return this.list;
  }

  editBook: Book;
  seteditBook(book: Book) {
    this.editBook = book;

  }
  geteditBook(): Book {
    return this.editBook;
  }


}
