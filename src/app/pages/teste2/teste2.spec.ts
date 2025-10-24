import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste2 } from './teste2';

describe('Teste2', () => {
  let component: Teste2;
  let fixture: ComponentFixture<Teste2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teste2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
