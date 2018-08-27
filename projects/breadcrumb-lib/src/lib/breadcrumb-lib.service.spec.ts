import { TestBed, inject } from '@angular/core/testing';

import { BreadcrumbLibService } from './breadcrumb-lib.service';

describe('BreadcrumbLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreadcrumbLibService]
    });
  });

  it('should be created', inject([BreadcrumbLibService], (service: BreadcrumbLibService) => {
    expect(service).toBeTruthy();
  }));
});
