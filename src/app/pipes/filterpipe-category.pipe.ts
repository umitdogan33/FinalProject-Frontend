import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'filterpipeCategory'
})
export class FilterpipeCategoryPipe implements PipeTransform {

  transform(value: Category[], filterText: string): Category[] {
    filterText= filterText?filterText.toLocaleLowerCase():""

    return filterText?value.filter((p:Category)=> p.categoryName.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
