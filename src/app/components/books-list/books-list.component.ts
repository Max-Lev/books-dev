import { BookNamePipe } from './../../filters/book-name.pipe';
import { Subject } from 'rxjs';
import { BooksService } from './../../services/books/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  providers:[BookNamePipe]
})
export class BooksListComponent implements OnInit {

  private mode:string;
  private booksListResolved: Array<any> = [];
  private searchList:Array<any> = [];
  constructor(private _activeRoute: ActivatedRoute,
    private bookNameFilter:BookNamePipe,
    private router: Router, private booksService: BooksService) {
  };

  ngOnInit() {
    this.booksListResolved = this._activeRoute.snapshot.data['books'];
    this.booksService.setBooks(this.booksListResolved);
    this.searchList = this.booksListResolved.concat();
    this.mode="load";
  }
  
  searchFn(search:string){
    this.booksListResolved = this.bookNameFilter.transform(search,this.searchList,this.booksListResolved);
  }


}
