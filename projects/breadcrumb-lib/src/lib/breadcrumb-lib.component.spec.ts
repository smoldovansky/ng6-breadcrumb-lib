import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbLibComponent } from './breadcrumb-lib.component';

describe('BreadcrumbLibComponent', () => {
  let component: BreadcrumbLibComponent;
  let fixture: ComponentFixture<BreadcrumbLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
