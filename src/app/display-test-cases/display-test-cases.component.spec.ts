import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTestCasesComponent } from './display-test-cases.component';

describe('DisplayTestCasesComponent', () => {
  let component: DisplayTestCasesComponent;
  let fixture: ComponentFixture<DisplayTestCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTestCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTestCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
