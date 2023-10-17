import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { selectInterface } from 'src/app/interfaces/utils.interfaces';
import { userProjectRoles } from 'src/app/models/user-project-role.models';
import { userRoles } from 'src/app/models/user-roles.models';
import { ManagerService } from 'src/app/services/manager/manager.service';
import { UserService } from 'src/app/services/users/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-fuel-prices',
  templateUrl: './manage-fuel-prices.component.html',
  styleUrls: ['./manage-fuel-prices.component.css']
})
export class ManageFuelPricesComponent implements OnInit {
  users!: User[];
  selectedUser!: User;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<User>;
  displayedColumns: string[] = ['rowNumber', 'first_name', 'last_name', 'email', 'phone_number', 'role', 'actions'];
  dataSource = new MatTableDataSource<User>();
  diesel = ""
  superfuel = ""

  userRolesSelectOptions: selectInterface[] = userRoles;
  userProjectRolesSelectOptions: selectInterface[] = userProjectRoles;

  constructor(
    private managerService: ManagerService

  ) { }

  ngOnInit() {
    this.getFuelPrices();

  }


  addNewUser() {
    const payload = {
      "name": sessionStorage.getItem('username') as string,
      "diesel": this.diesel,
      "superfuel": this.superfuel,
    }

    this.managerService.createFuelPrice(payload).subscribe({
      next: (response: User) => {
        Swal.fire('Request Successful!', 'User added successfully', 'success')
          .then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })
      },
      error: (errror: any) => {
        Swal.fire('Request Failed!', errror.error.message, 'error');
      }
    })

  }


  getFuelPrices() {
    this.managerService.getFuelPrices().subscribe({
      next: (response: User[]) => {
        this.users = response;
        if (this.users) {
          this.dataSource.data = this.users;
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
