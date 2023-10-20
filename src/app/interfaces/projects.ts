export interface projectInterface {
  projectId: string,
  projectName: string,
  fundingAgency: string,
  executingAgency: string,
  consultant: string,
  contractor: string,
  organization: string,
  startDate: string,
  endDate: string,
  projectCost: number,
  projectLocation: string,
  reportingFrequency: string,
  problemStatement: string,
  projectDescription: string,
  projectScope: string,
  businessCase: string,
  projectImages: string[],
  projectState: string,
}


export interface projectPayloadInterface {
  profileId: string,
  projectName: string,
  fundingAgency: number,
  implementingAgency: number,
  consultant: number,
  contractor: number,
  organization: number,
  startDate: string,
  endDate: string,
  projectCost: number,
  projectLocation: string,
  reportingFrequency: string,
  problemStatement: string,
  projectDescription: string,
  projectScope: string,
  businessCase: string,
  projectImages: string[],
  projectState: string,
}

export interface allProjectsInterface {
  projectId: string,
  projectName: string,
  executingAgency: string,
  contractor: string,
  fundingAgency: string,
  projectState: string,
}

export interface updateProjectPayloadInterface {
  projectId: string,
  projectName: string,
  fundingAgencyId: string,
  implementingAgencyId: string,
  consultantId: string,
  contractorId: string,
  organizationId: string,
  startDate: string,
  endDate: string,
  projectCost: number,
  projectLocation: string,
  reportingFrequency: string,
  problemStatement: string,
  projectDescription: string,
  projectScope: string,
  businessCase: string,
  profileId: string,
}

export interface addUserToProjectPayloadInterface {
  userIds: string[],
  projectId: string,
}

export interface projectDashboardSummaryPayload {
  pending: number,
  completed: number,
  commenced: number,
  totalProjects: number,
}



