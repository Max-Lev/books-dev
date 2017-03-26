import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'bookName'
})
export class BookNamePipe implements PipeTransform {

  transform(value: any, originalList: any, list: any): any {

    let filterOptions: Array<any> = [];
    if (value == undefined || value == "") {
      filterOptions = originalList;
    }
    else {
      list.filter((data, key) => {
        if (data.title.charAt(0).toLowerCase().indexOf(value.toLowerCase()) > -1) {
          filterOptions.push(data);
        }
      });
    }
    return filterOptions;
  }
}
