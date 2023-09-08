import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsComponent } from './events/events.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GloamsessionComponent } from './gloamsession/gloamsession.component';

import { AudioSceneComponent } from './audio-scene/audio-scene.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsComponent,
    PhotosComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    GloamsessionComponent,
    AudioSceneComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    FontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
