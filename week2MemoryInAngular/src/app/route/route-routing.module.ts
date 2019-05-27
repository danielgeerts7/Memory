import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { MemoryComponent } from '../memory/memory.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'memory',
    component: MemoryComponent
  }


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class RouteRoutingModule { }
