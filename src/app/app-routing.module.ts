import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AdmindashboardComponent} from './admindashboard/admindashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import {ListproductComponent} from './listproduct/listproduct.component';
import {EditproductComponent} from './editproduct/editproduct.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdmindashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'add', component: AddproductComponent},
  {path: 'edit/:id', component: EditproductComponent},
  {path: 'listprod', component: ListproductComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
