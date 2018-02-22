import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroformComponent } from './heroform/heroform.component';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { EncodedStringPipe } from './encoded-string.pipe';
import { HeroskillComponent } from './heroskill/heroskill.component';
import { heroReducer } from './reducers/hero.reducer'
import { StoreModule } from '@ngrx/store';
import { CustomerComponent } from './customer/customer.component'

const appRoutes: Routes = [
  { path: 'heros', component: DashboardComponent },
  { path: 'hero/:id',      component: HeroformComponent },
  { path: 'herocreate',      component: HeroformComponent },
  { path: 'skill/:id',      component: HeroskillComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroformComponent,
    EncodedStringPipe,
    HeroskillComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({lastHero: heroReducer})
  ],
  providers: [HeroService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
