import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoComponent } from './confirmacao.component';

describe('ConfirmacaoComponent', () => {
  let component: ConfirmacaoComponent;
  let fixture: ComponentFixture<ConfirmacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ConfirmacaoComponent]
});
    fixture = TestBed.createComponent(ConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
