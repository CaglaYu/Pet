import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundpetComponent } from './foundpet.component';

describe('FoundpetComponent', () => {
  let component: FoundpetComponent;
  let fixture: ComponentFixture<FoundpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
