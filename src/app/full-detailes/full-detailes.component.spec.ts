import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDetailesComponent } from './full-detailes.component';

describe('FullDetailesComponent', () => {
  let component: FullDetailesComponent;
  let fixture: ComponentFixture<FullDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
