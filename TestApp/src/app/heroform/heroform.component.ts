import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { AppState } from '../interface/app.state'
import { forEach } from '@angular/router/src/utils/collection';

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

  groups: HeroGroup[]=[];

  lastModifiedHero: Hero;
  isLoaded = false;
  model = new Hero();

  onSubmit() {
    this.updateGroups();
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
          this.initGroups(hero);
        });
      }
      else
      {
        this.initGroups(this.model);
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

  initGroups(hero: Hero)
  {
    let keys: string[] = Object.keys(HeroGroupEnum);
    
    this.groups = [];
    for(let key of keys)
    {
       let group: HeroGroup = new HeroGroup();
       group.name = key;
       group.value= HeroGroupEnum[key];

       if(hero != undefined && hero.groups != undefined)
       {
          if(hero.groups.indexOf(key)>=0)
          {
            group.checked = true;
          }
          else
          {
            group.checked = false;
          }
       }

       this.groups.push(group);
    }
  }

  updateGroups()
  {
    this.model.groups=[];

    for(let group of this.groups)
    {
      if(group.checked==true)
      {
        this.model.groups.push(group.name);
      }
    }
  }
  addSkill(hero: Hero)
  {
    this.router.navigateByUrl('/skill/'+hero.uuid);
  }
}

export class HeroGroup
{
  constructor(public checked?: boolean, public name?:string, public value?: string)
  {};
}

export enum HeroGroupEnum {
  avenger = "Avengers",
  xmen="X-men",
  local="Local",
  columbus="Columbus  Heros"
}
