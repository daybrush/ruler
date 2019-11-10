import { TestBed } from '@angular/core/testing';

import { NgxRulerService } from './ngx-ruler.service';

describe('NgxRulerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRulerService = TestBed.get(NgxRulerService);
    expect(service).toBeTruthy();
  });
});
