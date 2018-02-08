import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroskillComponent } from './heroskill.component';

describe('HeroskillComponent', () => {
  let component: HeroskillComponent;
  let fixture: ComponentFixture<HeroskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
