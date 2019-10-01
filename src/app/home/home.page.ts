import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public fechaInicio = '2019-04-24';
  public fechaFin = '2019-12-31';
  public diasArray: Array<any> = [
    'LU',
    'MI',
    'VI'
  ];
  public numDias: Array<any> = [];
  constructor() {
  }
  ngOnInit(): void {
    let fechaIMoment = moment(this.fechaInicio);
    let fechaFMoment = moment(this.fechaFin);
    let duracion = moment.duration(fechaIMoment.diff(fechaFMoment));
    let dias = duracion.asDays();
    let finalDias = dias * -1;
    console.log(dias);
    for (let di of this.diasArray) {
      switch (di) {
        case 'LU':
          this.numDias.push(1);
          break;
        case 'MA':
          this.numDias.push(2);
          break;
        case 'MI':
          this.numDias.push(3);
          break;
        case 'JU':
          this.numDias.push(4);
          break;
        case 'VI':
          this.numDias.push(5);
          break;
        case 'SA':
          this.numDias.push(6);
          break;
        case 'DO':
          this.numDias.push(0);
          break;
        default:
          console.log('Lo lamentamos, por el momento no disponemos de ');
      }
    }
    console.log(this.numDias);
    for (let i = 0; i <= finalDias; i++) {
      let fechaModificada:any;
      if (i === 0) {
        fechaModificada = fechaIMoment.add(0, 'd');
      } else {
        fechaModificada = fechaIMoment.add(1, 'd');
      }
      for (let numDi of this.numDias) {
        let numSelecDia = fechaModificada.day();
        if (numSelecDia === numDi) {
          console.log('Genera Insert');
          console.log(fechaModificada.format());
        }
      }
    }
  }
}
