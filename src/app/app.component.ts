import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbLibService } from 'breadcrumb-lib'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'breadcrumb-lib-app';
  constructor(private breadcrumbService: BreadcrumbLibService) {
    breadcrumbService.addFriendlyNameForRoute('/comp1', 'Comp 1');
    breadcrumbService.addFriendlyNameForRouteRegex('^/comp1/comp[0-9]$', 'Comp 2');
    breadcrumbService.hideRoute('/comp1/comp2/comp3');
    breadcrumbService.addCallbackForRouteRegex('/comp1/comp2/comp3/[0-9]', this.breadcrumbCallback(this));
  }

  breadcrumbCallback(otherThis: AppComponent) : {(id:string):string} 
  {return function(id:string) {
    return otherThis.title + ':Comp ' + id;
    }
  }
}



@Component({
  selector: 'comp1',
  template: `
      <h3>This is Component 1</h3>
      <button (click)="goTo()">Next</button>
  `
})
export class Component1 {
  constructor(private router: Router) {
  }

  goTo(): void {
      this.router.navigate(['/comp1/comp2']);
  }
}

@Component({
  selector: 'comp2',
  template: `
      <h3>This is Component 2</h3>
      <button (click)="goTo()">Next</button>
  `
})
export class Component2 {
  constructor(private router: Router) {
  }

  goTo(): void {
      this.router.navigate(['/comp1/comp2/comp3']);
  }
}

@Component({
  selector: 'comp3',
  template: `
      <h3>This is Component 3, which is hidden from the breadcrumb</h3>
      <button (click)="goTo()">Next</button>
  `
})
export class Component3 {
  constructor(private router: Router) {
  }
  
   goTo(): void {
      this.router.navigate(['/comp1/comp2/comp3/' + Math.floor(Math.random()*100)]);
  }
}

@Component({
  selector: 'comp4',
  template: `
      <h3>This is Component 4, which uses a callback to display its breadcrumb name</h3>
  `
})
export class Component4 {
  constructor() {
  }
}

