import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit{

  constructor(private _servicioFamiliar : ServicioFamiliarService){}

  nombreHermanoPequeno?:string;
  nombre2:string = 'David';
  fecha: Date = new Date();
  dolar: number = 32;
  pi:number = Math.PI;
  factor:number = 0.5;

    //Este método ngOnInit es necesario al implementar OnInit en la clase
    ngOnInit(): void {
      this._servicioFamiliar.setHermanoPequeno('pedro');
      this.nombreHermanoPequeno = this._servicioFamiliar.getHermanoPequeno();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }

}
