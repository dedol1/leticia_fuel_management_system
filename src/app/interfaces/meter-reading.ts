export interface MeterReading {
    id: number;
    user: number;
    name: string;
    fuel_type: string;
    meter_number: number;
    opening_time: string;
    opening_litter: number;
    closing_time: string;
    closing_litter: number;
    date: string;
    total_sale: number;
}
