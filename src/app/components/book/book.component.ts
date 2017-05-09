import { Book } from './book.model';
import { Subscription } from 'rxjs/Subscription';
import { ModalService } from './../../services/model/modal.service';
import { Component, OnInit, Input, Output, EventEmitter, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from './../../services/books/books.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input('nameConverter') nC: string;
  @Input() mode: string;
  @Input() book: any;
  @Input() list: Array<any>;
  editForm: FormGroup;
  modalMode: boolean = false;
  subscribtion: Subscription;
  deleteIndex: any = [];
  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private fbuilder: FormBuilder,
    private modalService: ModalService,
    private booksService: BooksService) { };

  ngOnInit() {
    this.formBuilder();
  };

  edit($event, itemID: number): void {
    $event.stopPropagation();
    this.booksService.seteditBook(this.book);
    this.router.navigate([`edit`, itemID]);
  };

  @Output() bookDelete = new EventEmitter<any>();
  delete($event, itemID: number, book: Book): number {
    $event.stopPropagation();

    let item = this.list.filter((item) => {
      if (item.id == book.id) {
        this.deleteIndex = this.list.indexOf(item);
      }
      return item;
    });

    this.modalService.display(true);
    this.bookDelete.emit(this.deleteIndex);
    return this.deleteIndex;
  };

  formBuilder() {
    if (this.mode == 'edit') {
      const lettersOnly = '^[a-zA-Z]*$';
      this.editForm = this.fbuilder.group({
        title: ['', Validators.required],
        author: ['', Validators.required],
        date: ['', Validators.required],
        tags: ['', Validators.required]
      });
    }
  };

  formormatter(form): any {
    for (let control in this.editForm.controls) {
      let fControl: any = this.editForm.controls[control];
      if (fControl.dirty) {
        let val = fControl.value.replace(/[^A-Za-z0-9 _'":!?,.-]/g, '');
        val = val.charAt(0).toUpperCase() + val.slice(1);
        this.editForm.controls[control].setValue(val);
      }
    }
    return this.editForm;
  }

  onSubmit(form: any, editFormVal: any) {

    let formattedform = this.formormatter(form);
    if (!formattedform.valid) {
      return;
    }
    this.router.navigate(['books']);
    
  };



}
