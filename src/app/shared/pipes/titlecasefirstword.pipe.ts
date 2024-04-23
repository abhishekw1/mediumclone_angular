import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'titlecasefirstword',
  standalone: true,
})
export class TitleCasePipeFirstWord implements PipeTransform {
  transform(value: string) {
    return value[0].toUpperCase() + value.slice(1);
  }
}
