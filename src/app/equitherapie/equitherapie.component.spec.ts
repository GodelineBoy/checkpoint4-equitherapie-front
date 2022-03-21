import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitherapieComponent } from './equitherapie.component';

describe('EquitherapieComponent', () => {
  let component: EquitherapieComponent;
  let fixture: ComponentFixture<EquitherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquitherapieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquitherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
