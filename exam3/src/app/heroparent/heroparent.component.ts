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
  heroes: Array<Hero> = new Array();
  voteCount: number = 0;
  results: string[];
      
  constructor(private http: Http, private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.fetchHeros().subscribe(data => {
      const json = data.json();
      json.forEach(h => {
        this.heroes.push( new Hero(h,this.heroes.length));
      });
    })
  }

  onVoted(agreed:string)
  {
    this.voteCount += 1;
  }
}
