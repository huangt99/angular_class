import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from "@ngrx/store";
import { AppState } from '../interface/app.state'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>) { }

  heroes: Hero[] = [];

  lastModifiedHero: Hero;

  ngOnInit() {
    this.getHeroes();

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

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => 
        {
          this.heroes = heroes;
        });
  }

  delete(id: Hero):void{
    this.heroService.deleteHero(id).subscribe(hero=>{
      console.log("Deleted hero:"+id);
      this.router.navigateByUrl("/heros");
    });
  }
}
