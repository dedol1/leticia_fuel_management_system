export interface Contractor {
    id: string,
    name: string,
    phoneNumber: string,
    email: string,
    address: string,
    keyOperations: string,
    classification: string,
    dateOfEstablishment: string
}

export interface contractorPayload {
    name: string,
    phoneNumber: string,
    email: string,
    address: string,
    keyOperations: string,
    classification: string,
    dateOfEstablishment: string
}
