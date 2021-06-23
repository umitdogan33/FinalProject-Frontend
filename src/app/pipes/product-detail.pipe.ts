import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetail } from '../models/productDetail';

@Pipe({
  name: 'productDetail'
})
export class ProductDetailPipe implements PipeTransform {

  transform(value: ProductDetail[], filterText: string): ProductDetail[] {
    filterText= filterText?filterText.toLocaleLowerCase():""

    return filterText?value.filter((p:ProductDetail)=> p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value

  }
}
