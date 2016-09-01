import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-skills',
  template: `
            <div id="tf-skills" class="text-center">
              <div class="overlay">
                <div class="container">
                  <div class="section-title center">
                    <h2>My <strong>skills</strong></h2>
                    <div class="line">
                      <hr>
                    </div>
                  </div>
            
                  <div class="row" *ngFor="let row of rows;">
                    <div class="col-xs-6 col-sm-3" *ngFor="let skill of row.skills;">
                      <div class="item">
                        <div class="thumbnail">
                          <img src="{{ skill.urlImage }}" alt="..." class="img-circle skills-img">
                          <div class="caption">
                            <h3>{{ skill.title }}</h3>
                            <div class="progress">
                              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" [style.width]="skill.knowlegdePercent">
                              </div>
                            </div>
                            <p>{{ skill.experience }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            
                </div>
              </div>
            </div>
`
})
export class SkillsComponent {

  rows = [
    {
      "skills":[
        {
          "title": "Angular 2",
          "knowlegdePercent": "45%",
          "urlImage": "app/images/angular.png",
          "experience": "I have the fundamental knowledge for Angular 2. I took a course online in Udemy.com to learn about this fabulous framework. By the way, I used this framework to build this site."
        },
        {
          "title": "Spring Framework",
          "knowlegdePercent": "75%",
          "urlImage": "app/images/spring.png",
          "experience": "I have been working with this for about 5 years using the Core, MVC, IoC and I just took a course of Spring Boot learning about the Rest Services integrating the Data Access module."
        },
        {
          "title": "Java",
          "knowlegdePercent": "95%",
          "urlImage": "app/images/java.png",
          "experience": "This is the base of my experience, I've 8 years developing in Java, J2EE, Servlets, EJB, WebServices and so forth."
        },
        {
          "title": "Databases",
          "knowlegdePercent": "75%",
          "urlImage": "app/images/databases.png",
          "experience": "Strong knowledge in SQL standard and PL/SQL. I have worked with DB2, Oracle, SQL Server and MySQL."
        }
      ]
    },
    {
      "skills":[
        {
          "title": "Struts",
          "knowlegdePercent": "90%",
          "urlImage": "app/images/struts.png",
          "experience": "I developed a lot of portlet projects using the Struts MVC. Those projects were deployed in IBM WebSphere Portal Server."
        },
        {
          "title": "WebSphere Portal Server",
          "knowlegdePercent": "75%",
          "urlImage": "app/images/websphere.png",
          "experience": "I worked for a long time with WPS, configuring pages, deploying portlets, adding web content using Web Content Manager, setting up LDAP services, virtual portals, etc... In addition, I also worked with the server application configuring some stuff too."
        },
        {
          "title": "Maven",
          "knowlegdePercent": "90%",
          "urlImage": "app/images/maven.png",
          "experience": "I've participated in different maven projects and also I created and configure my own repository using command lines."
        },
        {
          "title": "Ant",
          "knowlegdePercent": "80%",
          "urlImage": "app/images/ant.png",
          "experience": "I created several build scripts using profiles in order to separated the environment types."
        }
      ]
    }
  ];

  constructor() { }
}
