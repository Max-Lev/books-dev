import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  booksList: any = [];
  constructor(private _activeRoute: ActivatedRoute) {};

  ngOnInit() {
    this.booksList = this._activeRoute.snapshot.data['books'];
    console.log(this.booksList);
  };

  card($event, itemID: number) {

  };

  edit($event, itemID: number) {
    $event.stopPropagation();

  };

}
 