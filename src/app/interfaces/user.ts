export interface User {
        userId: string,
        first_name: string,
        last_name: string,
        email: string,
        phone_number: string,
        userProfileImage: string,
        role: string,
        accountStatus: string,
        gender: string,
        country: string,
        userProjectRole: string,
}

export interface userPayload {
        firstname: string,
        lastname: string,
        email: string,
        phoneNumber: string,
        password: string,
        role: string,
        userProjectRole: string,
}
