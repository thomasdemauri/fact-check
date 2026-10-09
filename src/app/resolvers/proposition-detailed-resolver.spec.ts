import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { propositionDetailedResolver } from './proposition-detailed-resolver';

describe('propositionDetailedResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => propositionDetailedResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
