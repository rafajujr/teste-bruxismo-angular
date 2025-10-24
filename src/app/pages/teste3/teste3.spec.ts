import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste3 } from './teste3';

describe('Teste3', () => {
  let component: Teste3;
  let fixture: ComponentFixture<Teste3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teste3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
