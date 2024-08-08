import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyLettersInput]'
})
export class OnlyLettersInputDirective {

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!event.key.match(/[A-Za-zА-Яа-я]/)) {
      event.preventDefault();
    }
  }

  constructor() { }

}
