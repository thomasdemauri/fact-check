import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeputyFilter } from './deputy-filter';

describe('DeputyFilter', () => {
  let component: DeputyFilter;
  let fixture: ComponentFixture<DeputyFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeputyFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(DeputyFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
