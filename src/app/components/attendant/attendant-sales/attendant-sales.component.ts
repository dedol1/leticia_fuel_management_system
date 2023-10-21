import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MeterReading } from 'src/app/interfaces/meter-reading';
import { User } from 'src/app/interfaces/user';
import { selectInterface } from 'src/app/interfaces/utils.interfaces';
import { userProjectRoles } from 'src/app/models/user-project-role.models';
import { userRoles } from 'src/app/models/user-roles.models';
import { AttendantService } from 'src/app/services/attendant/attendant.service';
import { UserService } from 'src/app/services/users/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attendant-sales',
  templateUrl: './attendant-sales.component.html',
  styleUrls: ['./attendant-sales.component.css']
})
export class AttendantSalesComponent implements OnInit {
  readings!: MeterReading[];
  selectedReading!: MeterReading;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MeterReading>;
  displayedColumns: string[] = ['rowNumber', 'fuel_type', 'meter_number', 'opening_time', 'opening_litter', 'closing_time', 'closing_litter', 'date', 'total_sale', 'actions'];
  dataSource = new MatTableDataSource<MeterReading>();
  id!: number;
  user!: number;
  name: string = sessionStorage.getItem("username") as string;
  fuel_type: string = "select fuel type";
  meter_number!: number;
  opening_time!: string;
  opening_litter!: number;
  closing_time!: string;
  closing_litter!: number;
  date!: string;
  total_sale!: number;

  userRolesSelectOptions: selectInterface[] = userRoles;
  userProjectRolesSelectOptions: selectInterface[] = userProjectRoles;

  constructor(
    private attendantService: AttendantService

  ) { }

  ngOnInit() {
    this.getAllMeterReadings();

  }


  addNewUser() {
    const payload = {
      name: this.name,
      fuel_type: this.fuel_type,
      meter_number: this.meter_number,
      opening_time: this.opening_time,
      opening_litter: this.opening_litter,
      date: this.date,
      total_sale: this.total_sale
    }

    this.attendantService.addNewMeterReading(payload).subscribe({
      next: (response: MeterReading) => {
        Swal.fire('Request Successful!', 'Reading added successfully', 'success')
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

  getCurrentMeterReading() {
    this.attendantService.getCurrentMeterReading().subscribe({
      next: (response: MeterReading) => {
        this.selectedReading = response;
      },
      error: (error: any) => {
        this.errorNotification(error.error.message)
      }
    })
  }


  getAllMeterReadings() {
    this.attendantService.getAllMeterReadings().subscribe({
      next: (response: MeterReading[]) => {
        this.readings = response;
        if (this.readings) {
          this.dataSource.data = this.readings;
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


  updateUser() {
    const payload = {
      closing_time: this.closing_time,
      closing_litter: this.closing_litter
    }

    this.attendantService.updateMeterReading(payload).subscribe({
      next: (response: MeterReading) => {
        Swal.fire('Request Successful!', 'Reading added successfully', 'success')
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


  getUserById(id: number) {
    this.attendantService.getMeterReadingById(id).subscribe({
      next: (response: MeterReading) => {
        this.selectedReading = response;
      },
      error: (error: any) => {
        this.errorNotification(error.error.message)
      }
    })
  }

  deleteReading(id: number) {
    this.attendantService.deleteMeterReading(id).subscribe({
      next: (response: MeterReading) => {
        Swal.fire('Request Successful!', 'Reading deleted successfully', 'success')
          .then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })
      },
      error: (error: any) => {
        this.errorNotification(error.error.message)
      }
    })
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  errorNotification(message: string) {
    Swal.fire('Request Failed!', message, 'error');
  }


  openEditModal(userId: number) {
    // Fetch user data by ID
    this.getUserById(userId);
    const editModal = document.getElementById('editUserModal');
    if (editModal) {
      editModal.classList.add('show');
      editModal.style.display = 'block';
    }
  };

  openCurrentReadinngMeterModal() {
    // Fetch user data by ID
    this.getCurrentMeterReading();
    const editModal = document.getElementById('currentReadinngMeter');
    if (editModal) {
      editModal.classList.add('show');
      editModal.style.display = 'block';
    }
  };
}

