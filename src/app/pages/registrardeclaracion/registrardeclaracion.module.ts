import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrardeclaracionPageRoutingModule } from './registrardeclaracion-routing.module';

import { RegistrardeclaracionPage } from './registrardeclaracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrardeclaracionPageRoutingModule
  ],
  declarations: [RegistrardeclaracionPage]
})
export class RegistrardeclaracionPageModule {}
