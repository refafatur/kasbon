import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RKeluhanPage } from './r-keluhan.page';

describe('RKeluhanPage', () => {
  let component: RKeluhanPage;
  let fixture: ComponentFixture<RKeluhanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RKeluhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
