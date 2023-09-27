import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScrollComponent } from './pages/home-scroll/home-scroll.component';

const routes: Routes = [
  {
    component: HomeScrollComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
