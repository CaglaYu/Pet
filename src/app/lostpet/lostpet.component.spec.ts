import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostpetComponent } from './lostpet.component';

describe('LostpetComponent', () => {
  let component: LostpetComponent;
  let fixture: ComponentFixture<LostpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
