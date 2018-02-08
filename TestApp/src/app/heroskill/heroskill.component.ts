import { Component, OnInit } from '@angular/core';
import { HeroAbilities } from '../hero.abilities';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroskill',
  templateUrl: './heroskill.component.html',
  styleUrls: ['./heroskill.component.css']
})
export class HeroskillComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  heroUuid:string;
  model=new HeroAbilities(0,0,0,0,0,0);
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.heroUuid = params.get('id');
    });
  }
}
