import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MemoryComponent } from '../memory/memory.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    loadChildren: '../login/login.module#LoginModule'
  },
  {
    path: 'memory',
    component: MemoryComponent,
    //loadChildren: '../memory/memory.component'
  }


 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class AuthRoutingModule { }
