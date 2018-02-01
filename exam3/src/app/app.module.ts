import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroparentComponent } from './heroparent/heroparent.component';
import { HerochildComponent } from './herochild/herochild.component';
import { HighlightDirective } from './highlight.directive';
import { HeroformComponent } from './heroform/heroform.component';
import { HeroService } from './hero.service'
import { HttpModule} from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroparentComponent,
    HerochildComponent,
    HighlightDirective,
    HeroformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
