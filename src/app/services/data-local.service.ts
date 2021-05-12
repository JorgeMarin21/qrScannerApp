import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  registers: Registro[] = [];
  constructor() { }

  guardarRegistro(format, text) {
    const nuevoRegistro = new Registro(format, text);
    this.registers.unshift(nuevoRegistro);
    console.log(this.registers);
  }
}
