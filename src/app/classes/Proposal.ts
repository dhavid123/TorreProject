import { Necessity } from './Necessity';
import { Person } from './Person';
export class Proposal {
    Id:number;
    person: Person = new Person();
    Necessity: Necessity = new Necessity();
    Description:String;
    CreateDate:Date;
    
  }
  