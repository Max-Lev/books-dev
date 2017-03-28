import { BooksService } from './../books/books.service';
import { Book } from './../../components/book/book.model';
import { AppCommon } from './../../common/common';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BooksResolveService implements Resolve<any> {

  private _appCommon: any = AppCommon;
  private Book: Book;
  private BookList: Array<Book>;

  constructor(private _http: Http,private booksService:BooksService) {
    this._appCommon = new AppCommon();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    let data: Subject<any> = new Subject<any>();
    this.BookList = [];
    
    if(this.booksService.getBooks()!=undefined)
    return;
    
    this._http.get(this._appCommon.booksApi).map((bookslist: Response) => {

      let dataResponse = bookslist.json().books;
      for (var item in dataResponse) {
        this.BookList.push
          (
          new Book
            (
                dataResponse[item]['book_id'], dataResponse[item]['title'],
                dataResponse[item]['author_lf'], dataResponse[item]['entry_date'],
                dataResponse[item]['cover'], dataResponse[item]['tags']
            )
          );
      }
      return this.BookList;

    }).subscribe((bookslist: any) => {
      data.next(bookslist);
    },
      (err) => {
        console.log('error', err.statusText);
      },
      () => {
        data.complete();
      });
    
    return data;
  }

}
