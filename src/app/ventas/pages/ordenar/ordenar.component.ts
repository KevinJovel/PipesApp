import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  texto:string='Hola mundo';
  constructor() { }

  ngOnInit(): void {
  }

}
