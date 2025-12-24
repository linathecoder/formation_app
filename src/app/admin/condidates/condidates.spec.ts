import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Condidates } from './condidates';

describe('Condidates', () => {
  let component: Condidates;
  let fixture: ComponentFixture<Condidates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Condidates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Condidates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
