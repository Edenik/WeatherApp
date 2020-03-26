import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCountriesComponent } from './random-countries.component';

describe('RandomCountriesComponent', () => {
  let component: RandomCountriesComponent;
  let fixture: ComponentFixture<RandomCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
