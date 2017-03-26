import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from "rxjs/operator/isEmpty";


@Pipe({
  name: 'bookName'
})
export class BookNamePipe implements PipeTransform {

  transform(value: any, originalList:any, list: any): any {

    let filterOptions: Array<any> = [];
    if (value == undefined || value == "") {
      filterOptions = originalList;
      return filterOptions;
    }
    else {
      list.filter((data, key) => {
        if (data.title.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          filterOptions.push(data);
        }
      });
    }
    return filterOptions;
  }
}
