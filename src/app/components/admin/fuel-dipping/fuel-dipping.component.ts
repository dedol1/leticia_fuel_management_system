import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FuelDipping } from 'src/app/interfaces/fuel-dipping';
import { FuelPrice } from 'src/app/interfaces/fuel-price';
import { selectInterface } from 'src/app/interfaces/utils.interfaces';
import { userProjectRoles } from 'src/app/models/user-project-role.models';
import { userRoles } from 'src/app/models/user-roles.models';
import { DateService } from 'src/app/services/date/date.service';
import { ManagerService } from 'src/app/services/manager/manager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fuel-dipping',
  templateUrl: './fuel-dipping.component.html',
  styleUrls: ['./fuel-dipping.component.css']
})
export class FuelDippingComponent implements OnInit {
  dippings!: FuelDipping[];
  selectedDipping!: FuelDipping;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<FuelDipping>;
  displayedColumns: string[] = ['rowNumber', 'name', 'diesel_dipping', 'super_dipping', 'date_time', 'actions'];
  dataSource = new MatTableDataSource<FuelDipping>();
  diesel = ""
  superfuel = ""

  userRolesSelectOptions: selectInterface[] = userRoles;
  userProjectRolesSelectOptions: selectInterface[] = userProjectRoles;

  constructor(
    private managerService: ManagerService,
    protected dateService: DateService

  ) { }

  ngOnInit() {
    this.getFuelDippings();

  }


  addNewDippings() {
    const payload = {
      "name": sessionStorage.getItem('username') as string,
      "diesel_dipping": this.diesel,
      "super_dipping": this.superfuel,
    }

    this.managerService.createFuelDipping(payload).subscribe({
      next: (response: any) => {
        Swal.fire('Request Successful!', 'Dipping added successfully', 'success')
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


  getFuelDippings() {
    this.managerService.getAllFuelDippings().subscribe({
      next: (response: FuelDipping[]) => {
        this.dippings = response;
        if (this.dippings) {
          this.dataSource.data = this.dippings;
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


  getFuelDippingById(id: number){
    this.managerService.getFuelDippingById(id).subscribe({
      next: (response: FuelDipping) => {
        this.selectedDipping = response;
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


  openEditModal(userId: number) {
    // Fetch user data by ID
    this.getFuelDippingById(userId);
    const editModal = document.getElementById('editUserModal');
    if (editModal) {
      editModal.classList.add('show');
      editModal.style.display = 'block';
    }
  };
}
