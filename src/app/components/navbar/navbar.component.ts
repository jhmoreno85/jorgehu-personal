import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  template: `
      <nav id="tf-menu" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">{{ title }}</a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li *ngFor="let menuElement of menuElements">
                <a href="{{ menuElement.href }}" class="page-scroll">{{ menuElement.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  `
})
export class NavbarComponent {

  title = '$JorgeHu_';

  menuElements = [
    {title: 'Home', href: '#tf-home'},
    {title: 'About Me', href: '#tf-about'},
    {title: 'Skills', href: '#tf-skills'},
    {title: 'Resume', href: '#tf-resume'},
    {title: 'Contact Me', href: '#tf-contact'}
  ];

  constructor() { }

}
