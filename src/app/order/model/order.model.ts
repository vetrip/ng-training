import { LabTest } from './labtest.model';
import { Physician } from './physician.model';
import { Location } from './location.model';
import { Member } from './member.model';

export class Order {
  caseNumber?: number;
  requestId?: number;
  member?: Member;
  physician?: Physician;
  location?: Location;
  labTests?:  Array<LabTest>;
}
