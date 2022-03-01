import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureCompComponent } from './picture-comp.component';

describe('PictureCompComponent', () => {
  let component: PictureCompComponent;
  let fixture: ComponentFixture<PictureCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
