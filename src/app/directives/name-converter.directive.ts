import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[nameConverter]'
})
export class NameConverterDirective {

  constructor(private element: ElementRef) {}

  @HostListener('focusout') focusout() {
    let name = this.element.nativeElement.value;
    this.element.nativeElement.value = this.nameConverter(name);
  };

  nameConverter(name): string {
    name = name.replace(/[^A-Za-z0-9 _'":!?,.-]/g, '');
    return name;
  }

}
