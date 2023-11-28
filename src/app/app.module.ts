import { SkillsComponent } from './pageComponent/skills/skills.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './pageComponent/navbar/navbar.component';
import { ExampleComponent } from './pageComponent/example/example.component';
import { AboutComponent } from './pageComponent/about/about.component';
import { FooterComponent } from './pageComponent/footer/footer.component';
import { ProjectComponent } from './pageComponent/project/project.component';
import { ContactComponent } from './pageComponent/contact/contact.component';
import { EductionComponent } from './pageComponent/eduction/eduction.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './pageComponent/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
HomeComponent,
    ExampleComponent,
    AboutComponent,
    FooterComponent,
    ProjectComponent,
    SkillsComponent,
    ContactComponent,
    EductionComponent,
      MainComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule


  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
