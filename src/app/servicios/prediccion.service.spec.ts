import { TestBed } from '@angular/core/testing';

import { PrediccionService } from './prediccion.service';

describe('PrediccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrediccionService = TestBed.get(PrediccionService);
    expect(service).toBeTruthy();
  });
});
