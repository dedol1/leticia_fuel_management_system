export interface Attendance {
    user: {
        first_name: string;
        last_name: string;
        email: string;
        role: string;
        phone_number: number;
        password: string;
      };
      clockin: string;
      clockout: string;
}
