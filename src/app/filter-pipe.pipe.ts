import { Pipe, PipeTransform } from '@angular/core';
import { persons } from './pmodel';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(representdata: persons[], searchterm: string): persons[] {
    if (!representdata || !searchterm) {
      return representdata;
    }
    return representdata.filter(data => data.name.toLowerCase().indexOf(searchterm.toLowerCase()) != -1)
  }

}
