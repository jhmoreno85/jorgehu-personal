import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-aboutme',
  template: `
    <div id="tf-about">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img [src]="urlImageAboutMe" class="img-responsive">
          </div>
          <div class="col-md-6">
            <div class="about-text">
              <div class="section-title">
                <h4>About me</h4>
                <h2>Some words <strong>about me</strong></h2>
                <hr>
                <div class="clearfix"></div>
              </div>
              <p class="intro">
                My name is Jorge Huerta and I am a Programmer living in Guadalajara City. I am the youngest of five children and I have three brothers and a sister. Also, I've a beautiful wife that I love her and she loves me (I guess). This is my personal website where I share something about me in the field of Software Development with others.
              </p>
              <p class="intro">
                Most weekends you will find me hanging out with my wife and my friends. I am big fan of the vw cars. With a passion for programming I need to constantly be on top of new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutmeComponent {
  urlImageAboutMe = 'app/images/me.jpg';
  constructor() { }
}
