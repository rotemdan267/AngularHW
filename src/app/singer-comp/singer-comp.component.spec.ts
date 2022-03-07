import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerCompComponent } from './singer-comp.component';

describe('SingerCompComponent', () => {
  let component: SingerCompComponent;
  let fixture: ComponentFixture<SingerCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingerCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
