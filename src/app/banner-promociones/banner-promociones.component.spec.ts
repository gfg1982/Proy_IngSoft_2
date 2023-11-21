import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPromocionesComponent } from './banner-promociones.component';

describe('BannerPromocionesComponent', () => {
  let component: BannerPromocionesComponent;
  let fixture: ComponentFixture<BannerPromocionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPromocionesComponent]
    });
    fixture = TestBed.createComponent(BannerPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
