import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
  },
  {
    path:'task',component:NewTaskComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
