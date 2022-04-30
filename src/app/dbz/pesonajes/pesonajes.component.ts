import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-pesonajes',
  templateUrl: './pesonajes.component.html'
})
export class PesonajesComponent  {

  @Input() //me dice que los personajes van a venir del componente padre, es decir del main component
  personajes: Personaje [] = []
}
