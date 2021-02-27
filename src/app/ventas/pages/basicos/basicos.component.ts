import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
   //Basics pipes
   nombreLower: string='kevin jovel'
   nombreUpper: string='KEVIN JOVEL'
   nombreCompleto: string='KeVin jOveL'
   //Fechas
   Date: Date=new Date();

}
