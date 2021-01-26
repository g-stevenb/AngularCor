import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mm-listar-platos',
  templateUrl: './mm-listar-platos.component.html',
  styleUrls: ['./mm-listar-platos.component.css']
})
export class MmListarPlatosComponent implements OnInit {
  platosCarta: string[];
  constructor() {
    this.platosCarta = ['Tallarines Rojos','Causa de Pollo','Arroz con Pollo','Seco a la Norteñas','Mondonguito a la Italiana'];
  }

  ngOnInit(): void {
  }

}
