import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  {path: 'login', component: AppComponent},
  {path: '', component: LoginComponent},
  {path: 'userdetails', component: UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
