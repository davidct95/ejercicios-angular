import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() titulo:string="";
  @Input() mensaje:string="";

  @Output() enviarEvento = new EventEmitter<string>();
  @Output() incrementar = new EventEmitter<void>();
  @Output() decrementar = new EventEmitter<void>();

  enviarMensaje(){
    this.enviarEvento.emit('Hola desde el componente hijo');
  }

  incrementarHijo(){
    this.incrementar.emit();
  }

  decrementarHijo(){
    this.decrementar.emit();
  }

}
