import { HeroAbilities } from './hero.abilities'
import { HeroGroup } from './hero.group'
import { Pipe, PipeTransform } from '@angular/core';

export class Hero
{
    constructor(public groups?:string[], public abilities?: HeroAbilities, public realName?: string, public s3ImageUrl?: string,
        public powers?: string, public uuid?:string, public heroName?: string, public signedAccords?: string)
    {
        if(groups == null)
        {
            this.groups=["Test Group"];
        }

        if(abilities == null)
        {
            this.abilities = new HeroAbilities(1,2,3,4,5,6);
        }

     }
}


