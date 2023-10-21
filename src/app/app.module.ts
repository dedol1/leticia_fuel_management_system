import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteNavbarComponent } from './components/shared/website-navbar/website-navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginComponent } from './components/shared/login/login.component';
import { SignupComponent } from './components/shared/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ManageUsersComponent } from './components/admin/manage-users/manage-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { AttendantDashboardComponent } from './components/attendant/attendant-dashboard/attendant-dashboard.component';
import { TransporterDashboardComponent } from './components/transport/transporter-dashboard/transporter-dashboard.component';
import { TransporterSideNavComponent } from './components/shared/transporter-side-nav/transporter-side-nav.component';
import { AttendantSideNavComponent } from './components/shared/attendant-side-nav/attendant-side-nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManageFuelPricesComponent } from './components/admin/manage-fuel-prices/manage-fuel-prices.component';
import { ManageAllAttendanceComponent } from './components/admin/manage-all-attendance/manage-all-attendance.component';
import { AdminAttendanceComponent } from './components/admin/admin-attendance/admin-attendance.component';
import { FuelDippingComponent } from './components/admin/fuel-dipping/fuel-dipping.component';
import { AttendantsAttendanceComponent } from './components/attendant/attendants-attendance/attendants-attendance.component';


@NgModule({
  declarations: [
    AppComponent,
    WebsiteNavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    TopNavComponent,
    SideNavComponent,
    DashboardComponent,
    ManageUsersComponent,
    AttendantDashboardComponent,
    TransporterDashboardComponent,
    TransporterSideNavComponent,
    AttendantSideNavComponent,
    ManageFuelPricesComponent,
    ManageAllAttendanceComponent,
    AdminAttendanceComponent,
    FuelDippingComponent,
    AttendantsAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
