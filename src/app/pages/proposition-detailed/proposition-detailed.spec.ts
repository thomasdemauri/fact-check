import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropositionDetailed } from './proposition-detailed';

describe('PropositionDetailed', () => {
  let component: PropositionDetailed;
  let fixture: ComponentFixture<PropositionDetailed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropositionDetailed],
    }).compileComponents();

    fixture = TestBed.createComponent(PropositionDetailed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
