import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  hero: Heroe[] = [];

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { 
    this.activatedRoute.params.subscribe(params => {

      this.hero = this.heroesService.getHero(params['id']);

    });
  }

  ngOnInit() {
  }

}
