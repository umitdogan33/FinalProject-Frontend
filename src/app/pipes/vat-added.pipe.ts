import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})

//value=değiştirilmek istenen değerin özelleiği
//rate = kurallar
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value+(value*rate/100)
  }

}
