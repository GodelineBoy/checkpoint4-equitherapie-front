import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeuteComponent } from './therapeute.component';

describe('TherapeuteComponent', () => {
  let component: TherapeuteComponent;
  let fixture: ComponentFixture<TherapeuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapeuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapeuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
