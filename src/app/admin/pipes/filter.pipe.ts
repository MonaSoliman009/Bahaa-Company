import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchCharactre:string): unknown {
    if (!searchCharactre) {
      return [];
    }
    else {
      //       return value.filter((item) => {
      //      value.includes(item) === true
      //         console.log(data);
      // // return data
      //       })
      const found = value.filter((v) => v.includes(searchCharactre));
      console.log(found);

return found
        // return value.find()
    }
      console.log(value);

  }

}
