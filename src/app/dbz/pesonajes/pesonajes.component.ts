import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from "../services/dbz.service";

@Component({
  selector: 'app-pesonajes',
  templateUrl: './pesonajes.component.html'
})
export class PesonajesComponent  {

  //@Input() personajes: Personaje [] = [] //me dice que los personajes van a venir del componente padre, es decir del main component
  
  get personajes() {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ) {
  }
}
