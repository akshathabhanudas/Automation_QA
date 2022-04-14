import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTestCasesComponent } from './display-test-cases/display-test-cases.component';
import { GLCubeComponent } from './gl-cube/gl-cube.component';
import { HomeComponent } from './home/home.component'; 


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'display-test-cases',component:DisplayTestCasesComponent},
  {path:'GL-Cube',component:GLCubeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
