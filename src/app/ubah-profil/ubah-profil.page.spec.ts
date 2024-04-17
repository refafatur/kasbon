import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UbahProfilPage } from './ubah-profil.page';

describe('UbahProfilPage', () => {
  let component: UbahProfilPage;
  let fixture: ComponentFixture<UbahProfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UbahProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
