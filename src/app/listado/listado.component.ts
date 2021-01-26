import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listadoNombres: string[];
  constructor() {
    this.listadoNombres = ['Keyla','Steven','Piero','Carmen','Jorge'];
}

  ngOnInit(): void {
  }

}
