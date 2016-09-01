import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  template: `
    <nav id="footer">
      <div class="container">
        <div class="pull-left fnav">
          <p>JorgeHu - COPYRIGHT © 2016. </p>
        </div>
        <div class="pull-right fnav">
          <ul class="footer-social">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class FooterComponent {
  constructor() { }
}
