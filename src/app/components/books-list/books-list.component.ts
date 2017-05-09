import { ModalService } from './../../services/model/modal.service';
import { Subscription } from 'rxjs/Subscription';
import { BookNamePipe } from './../../filters/book-name.pipe';
import { Subject } from 'rxjs';
import { BooksService } from './../../services/books/books.service';
import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  providers: [BookNamePipe]
})
export class BooksListComponent implements OnInit, AfterContentInit, OnDestroy {

  private mode: string;
  private booksListResolved: Array<any> = [];
  private searchList: Array<any> = [];
  isEmpty: Boolean = false;
  results: string;
  subscribtion: Subscription;
  bookDeleteIndex: number;
  constructor(private _activeRoute: ActivatedRoute,
    private bookNameFilter: BookNamePipe, private modalService: ModalService,
    private router: Router, private booksService: BooksService) {
  };

  ngOnInit() {

    if (this.booksService.geteditBook() == undefined) {
      this.booksListResolved = this._activeRoute.snapshot.data['books'];
      this.booksService.setBooks(this.booksListResolved);
    }
    else {
      this.booksListResolved = this.booksService.getBooks();
    }

    this.searchList = this.booksListResolved.concat();
    this.mode = "load";
  };

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  ngAfterContentInit() {
    this.subscribtion = this.modalService.delete(null).subscribe((isDelete) => {
      if (isDelete == true) {
        this.booksListResolved.splice(this.bookDeleteIndex, 1);
      }
    });
  };


  bookDeleteEventListener(index) {
    this.bookDeleteIndex = index;
  }

  searchFn(search: string) {
    this.booksListResolved = this.bookNameFilter.transform(search, this.searchList, this.booksListResolved);
    if (this.booksListResolved.length === 0) {
      this.isEmpty = true;
      this.results = `Sorry, no book title that start with '${search}'`;
    }
    else {
      this.isEmpty = false;
    }
  }


}
