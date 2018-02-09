import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { AppState } from '../interface/app.state'

@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.css']
})
export class HeroformComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>) {
  }

  groupKeys:string[] = Object.keys(HeroGroupEnum);
  groupAll = HeroGroupEnum;

  lastModifiedHero: Hero;
  isLoaded = false;
  model = new Hero();

  onSubmit() {
    console.log(this.model);

    this.heroService.addHero(this.model).subscribe(data => {
      this.store.dispatch({type: "Update", payload:this.model });
      this.router.navigateByUrl('/heros');
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      let uuid: string = params.get('id');

      if (uuid != null) {
        this.heroService.getHero(uuid).subscribe(hero => {
          this.model = hero;
          this.isLoaded = true;
        });
      }
    });

    this.store.subscribe(state => {
      this.lastModifiedHero = state.lastHero;
      if(this.lastModifiedHero!=undefined){
         console.log("last modified hero:"+this.lastModifiedHero.realName);
      }
      else
      {
       console.log("last modified hero is empty");
      }

   });
  }

  addSkill(hero: Hero)
  {
    this.router.navigateByUrl('/skill/'+hero.uuid);
  }
}

export enum HeroGroupEnum {
  avenger = "Avengers",
  xmen="X-men",
  local="Local",
  columbus="Columbus  Heros"
}
