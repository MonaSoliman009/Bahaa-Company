import { APart } from "./a-part";
import { BPart } from "./b-part";
import { CPart } from "./c-part";
import { DPart } from "./d-part";
import {Location} from "./location"
export class Condition {
  aPart: APart;
  bPart: BPart;
  cPart: CPart;
  dPart: DPart;
  location: Array<Location>;
}
