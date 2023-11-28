import { HomeComponent } from './pageComponent/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pageComponent/contact/contact.component';
import { AboutComponent } from './pageComponent/about/about.component';
import { SkillsComponent } from './pageComponent/skills/skills.component';
import { ProjectComponent } from './pageComponent/project/project.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  { path: '', component: MainComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skill', component: SkillsComponent },
  { path: 'project', component: ProjectComponent}

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
