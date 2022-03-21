import { TestBed } from '@angular/core/testing';

import { TherapeuteService } from './therapeute.service';

describe('TherapeuteService', () => {
  let service: TherapeuteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TherapeuteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
