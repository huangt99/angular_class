import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodedString'
})
export class EncodedStringPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return encodeURIComponent(value);
  }
}