export interface Agency {
    id: string,
    name: string,
    phoneNumber: string,
    email: string,
    address: string,
    keyOperations: string,
    classification: string,
    agencyGoverningBody: string,
    dateOfEstablishment: string,
    agencyType: string
}

export interface agencyPayload {
    name: string,
    phoneNumber: string,
    email: string,
    address: string,
    keyOperations: string,
    classification: string,
    agencyGoverningBody: string,
    dateOfEstablishment: string,
    agencyType: string
}
