import { LabTest } from './labtest';
import { Physician } from './physician';
import { Location } from './location';

export class Order {
  caseNumber?: number;
  requestId?: number;
  physician?: Physician;
  location?: Location;
  labTests?:  Array<LabTest>;
}
