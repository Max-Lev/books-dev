import { BooksService } from './../../services/books/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  booksListResolved: any = [];
  constructor(private _activeRoute: ActivatedRoute,
    private router: Router, private booksService: BooksService) {

  };

  ngOnInit() {
    this.booksListResolved = this._activeRoute.snapshot.data['books'];
    this.booksService.sharedBooks(this.booksListResolved);
  }

}
