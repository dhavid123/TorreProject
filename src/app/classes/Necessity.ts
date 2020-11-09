import { Area } from './Area';
import { Organization } from './Organization';
export class Necessity {
    Id: number;
    CreateDate:Date;
    Description:String;
    Location:String;
    MaxProposals:number;
    Organization: Organization = new Organization();
    Area:Area = new Area();
       
  }
  