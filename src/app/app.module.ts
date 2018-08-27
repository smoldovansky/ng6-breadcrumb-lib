import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1, Component2, Component3, Component4 } from './app.component';
import { routingModule, appRoutingProviders }  from './app.routing';
import { BreadcrumbLibModule} from 'breadcrumb-lib';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2,
    Component3,
    Component4    
  ],
  imports: [
    BrowserModule,
    routingModule,
    BreadcrumbLibModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
