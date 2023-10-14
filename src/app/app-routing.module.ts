import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginComponent } from './components/shared/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ManageUsersComponent } from './components/admin/manage-users/manage-users.component';
import { AttendantDashboardComponent } from './components/attendant/attendant-dashboard/attendant-dashboard.component';
import { TransporterDashboardComponent } from './components/transport/transporter-dashboard/transporter-dashboard.component';
import { AuthGuard } from './services/auth/auth-guard.service';
import { ManageFuelPricesComponent } from './components/admin/manage-fuel-prices/manage-fuel-prices.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: LoginComponent },
  {
    path: 'admin',
    canActivateChild: [AuthGuard],
    data: { roles: ['Manager'] },
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'manage-fuel-prices', component: ManageFuelPricesComponent },
    ]
  },
  {
    path: 'attendant',
    canActivateChild: [AuthGuard],
    data: { roles: ['Fuel Attendant'] },
    children: [
      { path: 'dashboard', component: AttendantDashboardComponent },
      { path: 'manage-users', component: ManageUsersComponent },
    ]
  },
  {
    path: 'transporter',
    canActivateChild: [AuthGuard],
    data: { roles: ['Fuel Transporter'] },
    children: [
      { path: 'dashboard', component: TransporterDashboardComponent },
      { path: 'manage-users', component: ManageUsersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
