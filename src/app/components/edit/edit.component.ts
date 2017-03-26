import { DateConverterPipe } from './../../filters/date-converter.pipe';
import { Book } from './../book/book.model';
import { BooksService } from './../../services/books/books.service';
import { Component, OnInit, OnDestroy, AfterContentInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'book-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [DateConverterPipe]
})
export class EditComponent implements OnInit, OnDestroy,
  AfterContentInit, DoCheck {

  editBook: Book;
  mode: string;
  subscribtion: Subscription;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private dc: DateConverterPipe,
    private booksService: BooksService) {

  };

  ngOnInit() {
    this.getBooksID();
    this.getBook();
    this.mode = "edit";
  };

  ngAfterContentInit() { }

  ngDoCheck() { }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  getBooksID() {
    this.activeRoute;
    this.router;

    this.subscribtion = this.activeRoute.params.subscribe((details) => {
      // this.bookDetails.id = <Number>details['id'];
      return details;
    });
  };


  getBook() {
    this.editBook = this.booksService.geteditBook();
    this.editBook.date = this.dc.transform(this.editBook.date);
  }

}
