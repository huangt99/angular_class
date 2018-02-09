import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroformComponent } from '../heroform/heroform.component';
import { HeroskillComponent } from '../heroskill/heroskill.component';

const appRoutes: Routes = [
  { path: 'heros', component: DashboardComponent },
  { path: 'hero/:id',      component: HeroformComponent },
  { path: 'herocreate',      component: HeroformComponent },
  { path: 'skill/:id',      component: HeroskillComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
