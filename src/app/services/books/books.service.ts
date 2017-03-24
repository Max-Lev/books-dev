import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { AppCommon } from '../../common/common';

@Injectable()
export class BooksService {

  constructor() { }

  books: any = new Subject<any>();
  books$ = this.books.asObservable();
  list: Array<any> = [];
  sharedBooks(list: any): Observable<any> {

    this.books.next(list);
    this.list = list;
    return this.books;
  }

  getBooks(): any {
    
    return this.list;
  }


}
