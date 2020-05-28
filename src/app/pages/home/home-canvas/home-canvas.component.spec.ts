import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCanvasComponent } from './home-canvas.component';

describe('HomeCanvasComponent', () => {
  let component: HomeCanvasComponent;
  let fixture: ComponentFixture<HomeCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
