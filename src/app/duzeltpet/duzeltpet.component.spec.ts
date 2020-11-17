import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuzeltpetComponent } from './duzeltpet.component';

describe('DuzeltpetComponent', () => {
  let component: DuzeltpetComponent;
  let fixture: ComponentFixture<DuzeltpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuzeltpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuzeltpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
