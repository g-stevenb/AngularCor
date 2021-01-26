import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mm-platos',
  templateUrl: './mm-platos.component.html',
  styleUrls: ['./mm-platos.component.css']
})
export class MmPlatosComponent implements OnInit {
  @Input() platillos: string;
  constructor() {
    // this.platillos = 'Aun no hay platos a la carta'
  }

  ngOnInit(): void {
  }

}
