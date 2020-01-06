import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(index: number){
    this.router.navigate(['/hero', index]);
  }

  buscarHeroes(termino: string): Heroe {

    let heroesArray: Heroe[] = [];
    termino = termino.toLowerCase();

    for (let heroe of this.heroes) {
      let nombre: string = heroe.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        heroesArray.push(heroe);
      }

    }

    return heroesArray;
  }

}
