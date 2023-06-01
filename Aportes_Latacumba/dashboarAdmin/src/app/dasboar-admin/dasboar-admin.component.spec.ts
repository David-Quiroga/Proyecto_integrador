import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboarAdminComponent } from './dasboar-admin.component';

describe('DasboarAdminComponent', () => {
  let component: DasboarAdminComponent;
  let fixture: ComponentFixture<DasboarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasboarAdminComponent]
    });
    fixture = TestBed.createComponent(DasboarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
