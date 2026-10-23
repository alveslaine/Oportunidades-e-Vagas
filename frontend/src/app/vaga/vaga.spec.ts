import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vaga } from './vaga';

describe('Vaga', () => {
  let component: Vaga;
  let fixture: ComponentFixture<Vaga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vaga],
    }).compileComponents();

    fixture = TestBed.createComponent(Vaga);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
