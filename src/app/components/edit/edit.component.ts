import { BooksService } from './../../services/books/books.service';
import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'book-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  //providers: [BooksService]
})
export class EditComponent implements OnInit, OnDestroy, AfterContentInit {

  subscribtion: Subscription;
  bookDetails: any = {
    id: ''
  };


  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private booksService: BooksService) {

    let x = this.booksService.getBooks();
    console.log(x);

  };

  ngOnInit() {
    this.getBooksID();
  };

  ngAfterContentInit() {
    this.subscribtion = this.booksService.books$.subscribe((list) => {
      console.log(list);
      debugger;
      return list;
    });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  getBooksID() {

    this.subscribtion = this.activeRoute.params.subscribe((details) => {
      this.bookDetails.id = <Number>details['id'];
      console.log(this.bookDetails.id);
      return details;
    });
  };


}
