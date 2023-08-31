import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';
import { GloamsessionComponent } from './gloamsession/gloamsession.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Rotta iniziale
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'gloam-session', component: GloamsessionComponent },
  { path: 'about', component: AboutComponent },
  // Altre rotte
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
