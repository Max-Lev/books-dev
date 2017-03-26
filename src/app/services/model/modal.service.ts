import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  constructor() { }

  showModal: any = new Subject<any>();
  showModal$ = this.showModal.asObservable();

  display(mode: Boolean): Observable<any> {
    this.showModal.next(mode);
    return Observable.from(this.showModal);
  }

  deleteConfirm: any = new Subject<any>();
  deleteConfirm$ = this.deleteConfirm.asObservable();

  delete(mode?: boolean): Observable<any> {
    this.deleteConfirm.next(mode);
    return Observable.from(this.deleteConfirm);
  }

}
