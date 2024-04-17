import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PKeluhanPage } from './p-keluhan.page';

describe('PKeluhanPage', () => {
  let component: PKeluhanPage;
  let fixture: ComponentFixture<PKeluhanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PKeluhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
