import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutriesComponent } from './coutries.component';

describe('CoutriesComponent', () => {
  let component: CoutriesComponent;
  let fixture: ComponentFixture<CoutriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
