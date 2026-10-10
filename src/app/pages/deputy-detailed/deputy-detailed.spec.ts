import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeputyDetailed } from './deputy-detailed';

describe('DeputyDetailed', () => {
  let component: DeputyDetailed;
  let fixture: ComponentFixture<DeputyDetailed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeputyDetailed],
    }).compileComponents();

    fixture = TestBed.createComponent(DeputyDetailed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
