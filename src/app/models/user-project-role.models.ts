import {selectInterface} from "../interfaces/utils.interfaces";

export const userProjectRoles: selectInterface[] = [
    {value: 'CLIENT', viewValue: 'Client'},
    {value: 'CONTRACTOR', viewValue: 'Contractor'},
    {value: 'SUPERVISOR', viewValue: 'Supervisor'},
    {value: 'MONITORING_EVALUATION', viewValue: 'Monitoring & Evaluation'},
    {value: 'DEV_ADMIN', viewValue: 'Dev Admin'},
    {value: 'PROJECT_MANAGEMENT', viewValue: 'Project Management'},
]

export const reportSource: selectInterface[] = [
  {value: 'CONTRACTOR', viewValue: 'Contractor'},
  {value: 'CONSULTANT', viewValue: 'Consultant'},
  {value: 'MONITORING_EVALUATION', viewValue: 'Monitoring & Evaluation'},
  {value: 'PROJECT_MANAGEMENT', viewValue: 'Project Management'},
]

export const ownerUserProjectRoles: selectInterface[] = [
  {value: 'CLIENT', viewValue: 'Client'},
  {value: 'CONTRACTOR', viewValue: 'Contractor'},
  {value: 'SUPERVISOR', viewValue: 'Supervisor'},
  {value: 'MONITORING_EVALUATION', viewValue: 'Monitoring & Evaluation'},
]
