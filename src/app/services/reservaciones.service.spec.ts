import { TestBed } from '@angular/core/testing';

import { ReservacionesService } from './reservaciones.service';

describe('ReservacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservacionesService = TestBed.get(ReservacionesService);
    expect(service).toBeTruthy();
  });
});
