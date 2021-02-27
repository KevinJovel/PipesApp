import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { RoutesModule } from './routes.module';

//Cambiar el local de la app para idioma global luego en provider
import localEs from '@angular/common/locales/es-SV';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    RoutesModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-SV'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
