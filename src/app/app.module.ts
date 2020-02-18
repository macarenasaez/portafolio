import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap'
//import {FormsModule} from '@angular/forms';

//modulo de peticion http
//import { HttpClienModule }from   '@angular/common/http';


//rutass
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { BiographyComponent } from './components/biography/biography.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    BiographyComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //HttpClienModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
