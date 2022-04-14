import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GLCubeComponent } from './gl-cube.component';

describe('GLCubeComponent', () => {
  let component: GLCubeComponent;
  let fixture: ComponentFixture<GLCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GLCubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GLCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
