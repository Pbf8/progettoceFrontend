import { TestBed, inject } from '@angular/core/testing';

import { CommentiService } from './commenti.service';

describe('CommentiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentiService]
    });
  });

  it('should be created', inject([CommentiService], (service: CommentiService) => {
    expect(service).toBeTruthy();
  }));
});
