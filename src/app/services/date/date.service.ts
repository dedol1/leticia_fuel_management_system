import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  formatDateToHumanReadable(dateString: string): string {
    const date = new Date(dateString); // Attempt to parse the ISO 8601 date
    if (isNaN(date.getTime())) {
      return "Invalid Date"; // Handle invalid input
    }
  
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
  
    return date.toLocaleDateString(undefined, options);
  }
}
