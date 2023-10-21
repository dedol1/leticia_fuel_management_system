import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { selectInterface } from 'src/app/interfaces/utils.interfaces';
import { userProjectRoles } from 'src/app/models/user-project-role.models';
import { userRoles } from 'src/app/models/user-roles.models';
import { UserService } from 'src/app/services/users/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users!: User[];
  selectedUser!: User;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<User>;
  displayedColumns: string[] = ['rowNumber', 'first_name', 'last_name', 'email', 'phone_number', 'role'];
  dataSource = new MatTableDataSource<User>();
  firstname = "";
  lastname = "";
  email = "";
  phoneNumber = "";
  role = "Select User Role";
  password = "";
  userProjectRole = "";
  projectId !: string;

  userRolesSelectOptions : selectInterface[] = userRoles;
  userProjectRolesSelectOptions: selectInterface[] = userProjectRoles;

  constructor(
     private userService: UserService

  ) { }

  ngOnInit() {
    this.getAllUsers();

  }


  addNewUser() {
    const payload = {
      first_name: this.firstname,
      last_name: this.lastname,
      email: this.email,
      phone_number: this.phoneNumber,
      password: this.password,
      role: this.role,
    }

    this.userService.addNewUser(payload).subscribe({
      next: (response: User) =>{
        Swal.fire('Request Successful!', 'User added successfully', 'success')
        .then((result)=>{
          if(result.isConfirmed){
            window.location.reload();
          }
        })
      },
      error: (errror: any) =>{
        Swal.fire('Request Failed!', errror.error.message, 'error');
      }
    })
    
  }


  getAllUsers(){
    this.userService.getAllUsers().subscribe({
      next: (response: User[]) => {
        this.users = response;
        if(this.users){
          this.dataSource.data = this.users;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.table.dataSource = this.dataSource;
        }
      },
      error: (error: any)=> {
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

  errorNotification(message: string){
    Swal.fire('Request Failed!',message, 'error');
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
