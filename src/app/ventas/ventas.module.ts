import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { MayusculaPipe } from './pipes/mayuscula.pipe';



@NgModule({
  declarations: [
    MayusculaPipe,
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports: [NumerosComponent, NoComunesComponent, BasicosComponent, OrdenarComponent],
})
export class VentasModule { }
