import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHighlight'
})
export class SearchHighlightPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    let markedValue = value.toLowerCase();
    if(markedValue.indexOf(query) > -1) {
      return value.replace(new RegExp(query, 'gi'), `<mark>${query}</mark>`)
    }

    return value;
  }

}
