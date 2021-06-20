import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SingleContentComponent } from './single-content/single-content.component';

const routes: Routes = [
  { path: 'nav', component: NavComponent},
  { path: 'home', component: MainComponent},
  { path: 'about', component: AboutComponent},
  { path: 'content', component: SingleContentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
