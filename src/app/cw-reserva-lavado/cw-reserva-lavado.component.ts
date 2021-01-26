import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ReservaLavado } from './../models/reserva-lavado.model';

@Component({
  selector: 'app-cw-reserva-lavado',
  templateUrl: './cw-reserva-lavado.component.html',
  styleUrls: ['./cw-reserva-lavado.component.css']
})
export class CwReservaLavadoComponent implements OnInit {

  @Input() reserva: ReservaLavado;
  @Input('idx') position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked : EventEmitter<ReservaLavado>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir(){
    this.clicked.emit(this.reserva);
    return false;
  }

}
