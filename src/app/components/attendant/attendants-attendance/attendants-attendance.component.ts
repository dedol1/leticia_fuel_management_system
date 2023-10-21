import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Attendance } from 'src/app/interfaces/attendance';
import { selectInterface } from 'src/app/interfaces/utils.interfaces';
import { userProjectRoles } from 'src/app/models/user-project-role.models';
import { userRoles } from 'src/app/models/user-roles.models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DateService } from 'src/app/services/date/date.service';
import { ManagerService } from 'src/app/services/manager/manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attendants-attendance',
  templateUrl: './attendants-attendance.component.html',
  styleUrls: ['./attendants-attendance.component.css']
})
export class AttendantsAttendanceComponent implements OnInit {
  attendances!: Attendance[];
  selectedAttendance!: Attendance;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Attendance>;
  displayedColumns: string[] = ['rowNumber', 'first_name', 'last_name', 'email', 'clockin', 'clockout'];
  dataSource = new MatTableDataSource<Attendance>();
  diesel = ""
  superfuel = ""
  userId = sessionStorage.getItem("userId");

  userRolesSelectOptions: selectInterface[] = userRoles;
  userProjectRolesSelectOptions: selectInterface[] = userProjectRoles;

  constructor(
    private managerService: ManagerService,
    private authService: AuthService,
    protected dateService: DateService

  ) { }

  ngOnInit() {
    this.getFuelPrices();

  }


 

  clockIn(){
    this.authService.clockIn(this.userId).subscribe({
      next: (response: any) => {
        sessionStorage.setItem("clockedIn", "true");
        Swal.fire('Request Successful!', 'You have sucessfully clockedIn', 'success')
        .then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        })
      }, 
      error: (error: any) => {
        this.errorNotification(error.error.error);
      }
    })
  }

  clockOut(){
    this.authService.clockOut(this.userId).subscribe({
      next: (response: any) => {
        sessionStorage.setItem("clockedIn", "false");
        Swal.fire('Request Successful!', 'You have sucessfully clockedOut', 'success')
        .then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        })
      }, 
      error: (error: any) => {
        this.errorNotification(error.error.error);
      }
    })
  }

  isClockedIn(){
    return sessionStorage.getItem("clockedIn") == "true"
  }

  isClockedOut(){
    return sessionStorage.getItem("clockedIn") == "false" || sessionStorage.getItem("clockedIn") == null
  }


  getFuelPrices() {
    this.managerService.getMyAttendace(this.userId).subscribe({
      next: (response: Attendance[]) => {
        this.attendances = response;
        if (this.attendances) {
          this.dataSource.data = this.attendances;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.table.dataSource = this.dataSource;
        }
      },
      error: (error: any) => {
        this.errorNotification(error.error.message)
      }
    })
  }


  updateUser(userId: string) {

  }


  getUserById(userId: string) {

  }

  deleteUser(userId: string) {

  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  errorNotification(message: string) {
    Swal.fire('Request Failed!', message, 'error');
  }


  openEditModal(userId: string) {
    // Fetch user data by ID
    this.getUserById(userId);
    const editModal = document.getElementById('editUserModal');
    if (editModal) {
      editModal.classList.add('show');
      editModal.style.display = 'block';
    }
  };
}

