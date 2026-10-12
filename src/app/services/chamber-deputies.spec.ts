import { TestBed } from '@angular/core/testing';
import { ChamberDeputies } from './chamber-deputies';

describe('ChamberDeputies', () => {
  let service: ChamberDeputies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamberDeputies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
