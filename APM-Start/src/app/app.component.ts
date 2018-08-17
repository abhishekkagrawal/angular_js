import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <nav class='navbar navbar-default'>
      <div class='container-fluid'>
        <a class='navbar-brand'>{{anotherTitle}}{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
      </div>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  //   template: `
  //   <div><h1>{{anotherTitle}}{{title}}</h1>
  //   <pm-products></pm-products>
  // </div>
  //   `,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'st Angular: Getting Started';
  pageTitle: string = 'st Angular Component';
  anotherTitle: number = 1;
}
export class AppComponentClass {
  title = 'Angular: Getting Started';
  pageTitle: string = 'First Angular Component';
  bodyContent: string = 'Body Content from Class';
}
