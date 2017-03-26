import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dc'
})
export class DateConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let date = new Date(value);
    let month = (date.getMonth() + 1).toString();
    month = (<number><any>month <= 9) ? `${'0' + month}` : month;
    let day = (date.getDate()).toString();
    day = (<number><any>day <= 9) ? `${'0' + day}` : `${day}`;
    let year = <number>(date.getFullYear());
    return <number><any>`${year}-${month}-${day}`;

  }

}
