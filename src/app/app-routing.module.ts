import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StartComponent} from './components/start/start.component';
import {BiographyComponent} from './components/biography/biography.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ContactComponent} from './components/contact/contact.component';



const routes: Routes = [
  {path:'home',component: StartComponent},
  {path:'start',component: StartComponent},
  {path:'biography',component: BiographyComponent},
  {path:'projects',component: ProjectsComponent},
  {path:'skills',component: SkillsComponent},
  {path:'contact',component: ContactComponent},
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'**',component: StartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
