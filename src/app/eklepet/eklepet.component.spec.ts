import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EklepetComponent } from './eklepet.component';

describe('EklepetComponent', () => {
  let component: EklepetComponent;
  let fixture: ComponentFixture<EklepetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EklepetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EklepetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
