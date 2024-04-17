import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeluhanPage } from './keluhan.page';

describe('KeluhanPage', () => {
  let component: KeluhanPage;
  let fixture: ComponentFixture<KeluhanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KeluhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
