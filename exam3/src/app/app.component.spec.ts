import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HeroparentComponent } from './heroparent/heroparent.component';
import { HerochildComponent } from './herochild/herochild.component';
import { HeroformComponent } from './heroform/heroform.component';
import { HerodetailComponent } from './herodetail/herodetail.component';

const appRoutes: Routes = [
  { path: 'heros', component: HeroparentComponent },
  { path: 'hero/:id',      component: HerodetailComponent },
  { path: 'herocreate',      component: HeroformComponent },
];

xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroparentComponent,
        HeroformComponent,
        HerodetailComponent
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Test App');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular Test App!');
  }));
});
