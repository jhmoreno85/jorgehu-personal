import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  template: `
    <div id="tf-home" class="text-center">
      <div class="overlay">
        <div class="content">
          <h1><strong>Hello <span class="color">anonymous</span>!</strong></h1>
          <p class="lead">My name is <strong>Jorge Huerta</strong>, on this site you'll find some info about me</p>
          <a href="#tf-about" class="fa fa-angle-down page-scroll"></a>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {

  constructor() { }
}
