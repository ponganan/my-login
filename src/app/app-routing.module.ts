import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userinfo', component: UserInfoComponent, canActivate: [authGuard] },
  // if 404 Not Found redirect to xxxxpage. use "**" path
  // have to use in the end of code 
  { path: "**", redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
