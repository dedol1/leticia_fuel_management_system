export interface Consultant {
    id: string,
    name: string,
    phoneNumber: string,
    email: string,
    address: string,
    keyOperations: string,
    classification: string,
    dateOfEstablishment: string
}

export interface consultantPayload {
    name: string,
    phoneNumber: string,
    email: string,
    address: string,
    keyOperations: string,
    classification: string,
    dateOfEstablishment: string
}
