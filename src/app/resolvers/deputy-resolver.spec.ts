import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { deputyResolver } from './deputy-resolver';

describe('deputyResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => deputyResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
