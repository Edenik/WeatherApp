import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByUserLocalComponent } from './by-user-local.component';

describe('ByUserLocalComponent', () => {
  let component: ByUserLocalComponent;
  let fixture: ComponentFixture<ByUserLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByUserLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByUserLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
