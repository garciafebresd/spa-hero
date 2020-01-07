import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this.heroesService.buscarHeroes(params.termino);
      console.log(this.heroes);
    });

  }

}
