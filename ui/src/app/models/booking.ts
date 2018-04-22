export class Booking {
  id: string;
  userId: string;
  propertyId: string;
  bookingTime: Date;
}

export interface BookingInterface {
  bookingTime: Date;
}

