import { Injectable } from '@angular/core';
import { Hero } from '../hero'
import { Http } from '@angular/http'

@Injectable()
export class HeroService {
  url:string = "http://localhost:2000/tweets";

  heroes : Array<Hero> = new Array();
  results: string[];

  constructor(private http: Http) { 
  }


  addHero (name: String){
    let msg = {message: name};
    return this.http.post(this.url, msg)
  }
 
  public fetchHeros() {
      return this.http.get(this.url)
  }

}