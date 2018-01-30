import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-heroparent',
  templateUrl: './heroparent.component.html',
  styleUrls: ['./heroparent.component.css']
})
export class HeroparentComponent implements OnInit {
  heroes: Array<Hero> = new Array();
  voteCount: number = 0;

  constructor() { }

  ngOnInit() {
      this.heroes.push(new Hero(1,"Tony Stark"));
      this.heroes.push(new Hero(2,"Steve Reogers"));
  }

  onVoted(agreed:string)
  {
    this.voteCount += 1;
  }
}
