import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroparentComponent } from './heroparent/heroparent.component';
import { HerochildComponent } from './herochild/herochild.component';
import { HeroformComponent } from './heroform/heroform.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { HighlightDirective } from './highlight.directive';
import { HeroService } from './hero.service'
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter';

const appRoutes: Routes = [
  { path: 'heros', component: HeroparentComponent },
  { path: 'hero/:id',      component: HerodetailComponent },
  { path: 'herocreate',      component: HeroformComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroparentComponent,
    HerochildComponent,
    HeroformComponent,
    HerodetailComponent,
    HighlightDirective
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ counter: counterReducer}) // state, reducer
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
