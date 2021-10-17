import { Keyboard } from './keyboard';
import { Lcd } from './lcd';
import { Battery } from './battery';
import { Condition } from './condition';
import { Configuration } from './configuration';
import { Bazel } from './bazel';
import { Dvd } from './dvd';
import { Speakers } from './speakers';
import { Camera } from './camera';
export class TestData {
  'power': boolean;
  condition: Condition;
  configuration: Configuration;
  battery: Battery;
  lcd: Lcd;
  bazel: Bazel;
  keyboard: Keyboard;
  dvd: Dvd;
  speakers: Speakers;
  camera: Camera;
  hasVGAorIntel: boolean;
}
