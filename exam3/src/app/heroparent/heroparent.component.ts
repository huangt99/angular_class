import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../hero.service'
import { Http } from '@angular/http'

@Component({
  selector: 'app-heroparent',
  templateUrl: './heroparent.component.html',
  styleUrls: ['./heroparent.component.css']
})
export class HeroparentComponent implements OnInit {
  heroes: Array<Hero>;
  voteCount: number = 0;
  results: string[];
      
  constructor(private http: Http, private heroService: HeroService) { }

  ngOnInit() {
      this.heroes = this.heroService.getHeros();
  }

  onVoted(agreed:string)
  {
    this.voteCount += 1;
  }
}
