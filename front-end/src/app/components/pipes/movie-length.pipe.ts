import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieLength'
})
export class MovieLengthPipe implements PipeTransform {

  transform(value: number): string {
    if(value > 0 && value/60 < 1) {
      return value + ' Minutes';
    } else {
      let hours = Math.floor(value/60);
      let minutes = value % 60;
      return hours + ' h ' + minutes + ' min';
    }
  }

}
