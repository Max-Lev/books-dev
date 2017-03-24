import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnChanges {

  @Input() book: any;
  @Input() list: Array<any>;
  constructor(private activeRoute: ActivatedRoute, private router: Router) {

  };

  ngOnInit() {

  };

  ngOnChanges() {

  }

  card($event, itemID: number): void {

  };

  edit($event, itemID: number): void {

    $event.stopPropagation();
    this.router.navigate([`edit`, itemID]);

  };

  delete($event, itemID: number): void {
    $event.stopPropagation();
    let index;
    let book = this.list.find((item) => {
      if (item.id == itemID) {
        index = this.list.indexOf(item);
      }
      return index;
    })
    this.list.splice(index, 1);
  };

}
