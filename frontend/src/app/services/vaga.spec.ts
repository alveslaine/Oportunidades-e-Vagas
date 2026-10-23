import { TestBed } from '@angular/core/testing';

import { Vaga } from './vaga';

describe('Vaga', () => {
  let service: Vaga;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vaga);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
