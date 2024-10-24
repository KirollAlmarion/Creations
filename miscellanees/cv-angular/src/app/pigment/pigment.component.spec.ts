import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmentComponent } from './pigment.component';

describe('PigmentComponent', () => {
  let component: PigmentComponent;
  let fixture: ComponentFixture<PigmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
