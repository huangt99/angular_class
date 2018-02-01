import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerodetailComponent } from './herodetail.component';

xdescribe('HerodetailComponent', () => {
  let component: HerodetailComponent;
  let fixture: ComponentFixture<HerodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerodetailComponent ],
      imports: [HerodetailComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
