import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  //Ejemplo de como usar un servicio

  //Se inyecta una dependencia
  constructor(private _servicioFamiliar : ServicioFamiliarService){}

  //Otra forma de realizar inyección de dependencias
  private _servicioFamiliar2 = inject(ServicioFamiliarService);

  //Variable a usar
  nombreHermanoGrande?:string;

  //Este método ngOnInit es necesario al implementar OnInit en la clase
  ngOnInit(): void {
      this._servicioFamiliar.setHermanoGrande('Juan');
      this.nombreHermanoGrande = this._servicioFamiliar.getHermanoGrande();
  }


  contador:number = 0;
  nombre:string = 'Pedro';
  imagen:string = './assets/images/java.jpg';
  clase:string = 'clase1';
  fecha:Date = new Date();
  condition:boolean = true;
  items = ['item1', 'item2', 'item3'];

  
  titulo: string = 'Titulo desde el componente padre';
  mensaje: string = 'Este mensaje se envia al componente hijo';

  reciboMensaje?: string;

  estilo = {
    color: 'red',
    fontSize: '20px'
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  cambiarImagen(){
    this.imagen = './assets/images/angular.jpg'
  }

  onClick(){
    alert('Hola!');
  }

  cambiarClase(){
    this.clase = 'clase2';
    console.log(this.clase);
  }

  cambiarEstilo(){
    this.estilo = {
      color: 'blue',
      fontSize: '30px'
    }
  }

  recibirMensaje($event: string){
    this.reciboMensaje = $event;
    alert('Mensaje recibido del hijo: ' + this.reciboMensaje);
  }

  //Método para el ejercicio con servicios
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }
}
