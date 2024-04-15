import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado'
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  transform(valor:string): string {
    //Todo el texto en mayusculas
    //return valor?.toUpperCase();

    //Todo el texto en minuscula
    return valor?.toLowerCase();
  }
}
