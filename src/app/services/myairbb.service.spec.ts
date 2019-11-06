import { TestBed, inject } from '@angular/core/testing';

import { MyairbbService } from './myairbb.service';

describe('MyairbbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyairbbService]
    });
  });

  it('should be created', inject([MyairbbService], (service: MyairbbService) => {
    expect(service).toBeTruthy();
  }));
});
