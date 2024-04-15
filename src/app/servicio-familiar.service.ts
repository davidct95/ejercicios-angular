import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string;
  hermanoPequeno?: string;

  getHermanoGrande(){
    return this.hermanoGrande || '';
  }

  setHermanoGrande(hermanoGrande:string){
    this.hermanoGrande = hermanoGrande;
  }

  getHermanoPequeno(){
    return this.hermanoPequeno;
  }

  setHermanoPequeno(hermanoPequeno:string){
    this.hermanoPequeno = hermanoPequeno; 
  }

  saludar(hermano: string){
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo():string {
    return '¿Cómo estás hijo?'
  }

  constructor() { }
}
