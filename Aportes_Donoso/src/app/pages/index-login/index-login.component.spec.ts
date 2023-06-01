import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLoginComponent } from './index-login.component';

describe('IndexLoginComponent', () => {
  let component: IndexLoginComponent;
  let fixture: ComponentFixture<IndexLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexLoginComponent]
    });
    fixture = TestBed.createComponent(IndexLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
