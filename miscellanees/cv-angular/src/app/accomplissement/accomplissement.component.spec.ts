import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplissementComponent } from './accomplissement.component';

describe('AccomplissementComponent', () => {
  let component: AccomplissementComponent;
  let fixture: ComponentFixture<AccomplissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomplissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomplissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
