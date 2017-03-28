import { Directive, ElementRef, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[nameConverter]',
  outputs: ['converted']
})
export class NameConverterDirective {

  constructor(private element: ElementRef) { }
  converted: any = new EventEmitter<Array<any>>();
  @HostListener('submit') submit() {
 
    let name = this.element.nativeElement.value;
    this.element.nativeElement.value = this.nameConverter(name);

    console.log(this.element);
    this.converted.emit({ str: this.element.nativeElement.value, element: this.element.nativeElement });
    return this.element.nativeElement.value;
  };

  nameConverter(name): string {
    name = name.replace(/[^A-Za-z0-9 _'":!?,.-]/g, '');
    console.log(name);
    return name;
  }

}
