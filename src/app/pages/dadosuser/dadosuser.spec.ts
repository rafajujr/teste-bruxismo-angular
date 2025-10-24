import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dadosuser } from './dadosuser';

describe('Dadosuser', () => {
  let component: Dadosuser;
  let fixture: ComponentFixture<Dadosuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dadosuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dadosuser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
