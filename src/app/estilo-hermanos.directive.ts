import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  constructor(private elements : ElementRef) { 

    //Cambia el color del div a green
    //this.elements.nativeElement.style.backgroundColor = 'green';

    //La primera letra de la palabra la deja en mayusculas : capitalize
    this.elements.nativeElement.style.textTransform = 'capitalize';

  }

  

}
