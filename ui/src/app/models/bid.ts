export class Bid{
    userId:string;
    propertyId:string;
    value:number;
    createdDate:Date;
}

export interface BidInterface {
  userId:string;
  propertyId:string;
  value:number;
  createdDate:Date;
}
