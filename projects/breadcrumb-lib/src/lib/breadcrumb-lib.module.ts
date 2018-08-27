import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbLibComponent } from './breadcrumb-lib.component';
import { BreadcrumbLibService } from './breadcrumb-lib.service';

export * from './breadcrumb-lib.component';
export * from './breadcrumb-lib.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BreadcrumbLibComponent],
  exports: [BreadcrumbLibComponent]
})
export class BreadcrumbLibModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BreadcrumbLibModule,
      providers: [BreadcrumbLibService]
    };
  }
 }
