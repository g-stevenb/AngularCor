import { Component, OnInit } from '@angular/core';
import { ReservaLavado } from './../models/reserva-lavado.model';

@Component({
  selector: 'app-cw-lista-reserva',
  templateUrl: './cw-lista-reserva.component.html',
  styleUrls: ['./cw-lista-reserva.component.css']
})
export class CwListaReservaComponent implements OnInit {
  reservaLavado: ReservaLavado[];
  constructor() {
    this.reservaLavado = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre:string, email:string, celular:number, fecha:string, opcAuto:string, opcLavado:string):boolean{
    // console.log(nombre);
    // console.log(email);
    // console.log(celular);
    // console.log(fecha);
    // console.log(opcAuto);
    // console.log(opcLavado);
    // console.log(new ReservaLavado(nombre, email, celular, fecha, opcAuto, opcLavado))
    this.reservaLavado.push(new ReservaLavado(nombre, email, celular, fecha, opcAuto, opcLavado));
    // console.log(this.reservaLavado)
    return false;
  }

  elegido(d:ReservaLavado){
    this.reservaLavado.forEach(function (x) {x.setSelected(false);});
    d.setSelected(true);
  }

}
