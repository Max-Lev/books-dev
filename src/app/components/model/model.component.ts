import { Subscription } from 'rxjs/Subscription';
import { ModalService } from './../../services/model/modal.service';
import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit, AfterContentInit, OnDestroy {

  displayModal: boolean = false;
  subscribtion: Subscription;
  constructor(private modalService: ModalService) {

  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  ngAfterContentInit() {
    this.subscribtion = this.modalService.showModal$.subscribe((mode) => {
      this.displayModal = mode;
    });
  }


  close() {
    this.displayModal = false;
    this.modalService.display(false);
  };

  delete() {
    this.displayModal = false;
    this.modalService.delete(true);
  };


}
