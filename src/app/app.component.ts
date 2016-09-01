import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar";
import { HomeComponent } from "./components/home";
import { AboutmeComponent } from "./components/aboutme";
import { SkillsComponent } from "./components/skills";
import { ResumeComponent } from "./components/resume";
import { FooterComponent } from "./components/footer";
import { ContactmeComponent } from "./components/contactme";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-aboutme></app-aboutme>
    <app-skills></app-skills>
    <app-resume></app-resume>
    <app-contactme></app-contactme>
    <app-footer></app-footer>
  `,
  directives: [NavbarComponent, FooterComponent, HomeComponent, AboutmeComponent, SkillsComponent, ResumeComponent, ContactmeComponent]
})
export class AppComponent {

}
