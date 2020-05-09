import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import validator from 'validator';
import { ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import {ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-registrarempresa',
  templateUrl: './registrarempresa.page.html',
  styleUrls: ['./registrarempresa.page.scss'],
})
export class RegistrarempresaPage implements OnInit {
  nombre: string;
  nit : number;
  direccion:string;
  ciudad: string;
  rubro:string;

  constructor() { }

  ngOnInit() {
  }

}