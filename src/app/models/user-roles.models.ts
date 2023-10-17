import {selectInterface} from "../interfaces/utils.interfaces";

export const userRoles: selectInterface[] = [
    {value: 'Select User Role', viewValue: 'Select User Role'},
    {value: 'Manager', viewValue: 'Manager'},
    {value: 'Fuel Attendant', viewValue: 'Fuel Attendant'},
    {value: 'Fuel Transporter', viewValue: 'Fuel Transporter'},
]

export const ownerUserRoles: selectInterface[] = [
  {value: 'USER', viewValue: 'Observer'},
  {value: 'PROJECT_TEAM', viewValue: 'Project Team'},
]

