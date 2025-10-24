import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste1 } from './teste1';

describe('Teste1', () => {
  let component: Teste1;
  let fixture: ComponentFixture<Teste1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teste1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
