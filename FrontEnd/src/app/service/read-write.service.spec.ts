import { TestBed } from '@angular/core/testing';

import { ReadWriteService } from './read-write.service';

describe('ReadWriteService', () => {
  let service: ReadWriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadWriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
