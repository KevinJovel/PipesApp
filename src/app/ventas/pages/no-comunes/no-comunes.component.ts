import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  //i18nSelect
  orientacion: string='masculina';
  nombre: string='Kevin';
  sexo: string='masculino';
  generoMapp = {
    'masculino':'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nPlural
  clientes: string[]=['kevin', 'tere','adriana', 'Mario'];
  clientesMapp={
    '=0' :'no hay clientes esperando',
    '=1' :'hay  un cliente esperando',
    'other' :`hay  # clientes esperando `

  }
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  cambiarPersona(){
    if(this.sexo=='femenino'){
      this. sexo='masculino';
      this.nombre='Kevin'
      this.orientacion='masculina';
    }else{
      this.orientacion='femenina';
      this.sexo='femenino';
      this.nombre='Genesis';
    }
  }
  borrarPersona(){
    this.clientes.pop();
  }
  //Key value

  persona={
    nombre:'Kevin',
    edad:24,
    direccion:'San sebastian, san vicente'
  }

   // JsonPipe
   heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]
  // Async Pipe
  miObservable= interval(1000);
  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );

  });
}
