import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Directiva2Component } from './directiva2.component';

describe('Directiva2Component', () => {
  let component: Directiva2Component;
  let fixture: ComponentFixture<Directiva2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Directiva2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Directiva2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
