import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMemComponent } from './all-mem.component';

describe('AllMemComponent', () => {
  let component: AllMemComponent;
  let fixture: ComponentFixture<AllMemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
