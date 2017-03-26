import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from './../../services/books/books.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnChanges {

  @Input() mode: string;
  @Input() book: any;
  @Input() list: Array<any>;
  editForm: FormGroup;
  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private fbuilder: FormBuilder,
    private booksService: BooksService) {

  };

  ngOnInit() {
    this.formBuilder();
  };

  ngOnChanges(val) { }

  edit($event, itemID: number): void {
    $event.stopPropagation();
    this.booksService.seteditBook(this.book);
    this.router.navigate([`edit`, itemID]);
  };

  formBuilder() {

    if (this.mode == 'edit') 
    {
      this.editForm = this.fbuilder.group
        ({
          title: ['', Validators.required],
          author: ['', Validators.required],
          date: ['', Validators.required],
          tags: ['', Validators.required],
        });

      console.log(this.editForm);
    }

  }

  onSubmit(form: any, editFormVal: any) {
    console.log(form);
    console.log(editFormVal);
    this.router.navigate(['books']);
  }

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
