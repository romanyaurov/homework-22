import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimiter'
})
export class TextLimiterPipe implements PipeTransform {

  private regex = /^(.{0,105})/;

  transform(value: string): string {
    if (value.length >= 105) {
      const matchedText = value.match(this.regex);
      if (matchedText) return matchedText[0] + '...'
    }
    return value;
  }

}
