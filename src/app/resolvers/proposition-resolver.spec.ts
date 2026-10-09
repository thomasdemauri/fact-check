import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { propositionResolver } from './proposition-resolver';

describe('propositionResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => propositionResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
