import { Component } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerochildComponent } from './herochild.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HerodetailComponent } from '../herodetail/herodetail.component';

const appRoutes: Routes = [
  { path: 'hero/:id',      component: HerodetailComponent }
];


@Component({
  template: ''
})
class TestComponent{
    col1Name = 'testing';
    item = {
      _id:1
    };
}


@Component({
  template: ''
})
class DummyComponent{

}


xdescribe('HerochildComponent', () => {
  let component: HerochildComponent;
  let fixture: ComponentFixture<HerochildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerochildComponent ],
      imports: [

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
