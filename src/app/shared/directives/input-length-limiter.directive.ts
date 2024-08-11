import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[inputLengthLimiter]'
})
export class InputLengthLimiterDirective {

  @Input('inputLengthLimiter') maxLength: string = '';

  constructor(
    private elem: ElementRef
  ) { }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (this.elem.nativeElement.value.length === +this.maxLength && event.key.match(/[0-9]/)) {
      event.preventDefault();
    }
  }

}
