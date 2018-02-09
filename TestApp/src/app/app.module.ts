import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroformComponent } from './heroform/heroform.component';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { EncodedStringPipe } from './encoded-string.pipe';
import { HeroskillComponent } from './heroskill/heroskill.component';
import { heroReducer } from './reducers/hero.reducer'
import { StoreModule } from '@ngrx/store'
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroformComponent,
    EncodedStringPipe,
    HeroskillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    StoreModule.forRoot({lastHero: heroReducer})
  ],
  providers: [HeroService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
