import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <router-outlet></router-outlet>
  `
})
export class HomeRouterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
