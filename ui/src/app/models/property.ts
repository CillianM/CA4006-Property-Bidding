export class Property{
    id:string;
  creator: string;
  name: string;
  propertyType: string;
  areaCode: string;
  bedroomCount: number;
  price: number;
  biddingExpiry: Date;
}

export interface PropertyInterface {
  name: string;
    propertyType:string;
    areaCode:string;
    bedroomCount:number;
    price:number;
    biddingExpiry:Date;
}
