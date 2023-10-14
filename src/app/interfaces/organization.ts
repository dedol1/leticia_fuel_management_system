export interface Organization {
    id: string,
    name: string,
    category: string
}

export interface organizationPayloadInterface {
    name: string,
    categoryId: string,
}

export interface updateOrganizationPayloadInterface {
    id: string,
    name: string,
    categoryId: string,
}
