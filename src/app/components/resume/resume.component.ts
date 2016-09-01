import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-resume',
  template: `
    <div id="tf-resume" class="text-center">
      <div class="container">
        <div class="section-title center">
          <h2>My <strong>Resume</strong></h2>
          <div class="line">
            <hr>
          </div>
          <div class="clearfix"></div>
          <div class="space"></div>
          <small>
            <em>
              If you're interested in my profile, you can download my resume in PDF format. Please feel free to reach me through e-mail or go to the contact-me section.
            </em>
          </small>
          <div class="space"></div>
          <a href="app/resources/JLHuertaResume.pdf" target="_blank" class="btn btn-primary featured">Download Resume</a>
        </div>
      </div>
    </div>  
  `
})
export class ResumeComponent {

  constructor() { }

}
