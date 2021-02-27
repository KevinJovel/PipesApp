import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Pipes en angular',
        icon:'pi pi-desktop',
        items:[
          {
            label:'Básicos',
            icon:'pi-align-left',
            routerLink:'/'
          },
          {
            label:'No comunes',
            icon:'pi pi-align-left',
            routerLink:'no-comunes'
          },
          {
            label:'Números',
            icon:'pi pi-sort-numeric-up',
            routerLink:'numeros'
          },
          {
            label:'Ordenar',
            icon:'pi pi-sort',
            routerLink:'ordenar'
          }
        ]
      },
      {
        label:'Pipes personalizados',
        icon:'pi pi-cog',
        items:[
          {
            label:'personalizacion 1'
          }
        ]
      }
    ]

  }
}
