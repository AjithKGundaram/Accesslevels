import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any {
    
    if(!value) {
      return [];
    }

    if(!searchText) {
      return value;
    }
    searchText = searchText.toLocaleLowerCase();

    return value['filteredData'].filter(it => {
      return JSON.stringify(it).toLocaleLowerCase().includes(searchText);
      console.log(value.filter);
    })
  }
}
