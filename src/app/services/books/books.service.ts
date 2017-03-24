import { Injectable } from '@angular/core';
import { AppCommon } from '../../common/common';

@Injectable()
export class BooksService {

// private AppCommon: AppCommon
  constructor() {
    // console.log(this.AppCommon);
  }

  getBooks() {
    console.log('get books resolve');
  }

}
