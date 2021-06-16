import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  registers: Registro[] = [];
  constructor(private storage: Storage, private navCtrl: NavController) {
    this.initialize();
  }

  async initialize() {
    await this.storage.create();
    this.registers = await this.storage.get('logs') || [];
    console.log('inicio ', this.registers);
  }

  guardarRegistro(format, text) {
    const nuevoRegistro = new Registro(format, text);
    this.registers.unshift(nuevoRegistro);
    console.log(this.registers);
    this.save();
  }

  async save (){
    await this.storage.set('logs', this.registers);
  }
}
