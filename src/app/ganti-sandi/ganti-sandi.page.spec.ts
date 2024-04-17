import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GantiSandiPage } from './ganti-sandi.page';

describe('GantiSandiPage', () => {
  let component: GantiSandiPage;
  let fixture: ComponentFixture<GantiSandiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GantiSandiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
