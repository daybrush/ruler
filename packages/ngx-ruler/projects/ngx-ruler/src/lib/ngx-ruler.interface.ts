import VanillaRuler, { METHODS, RulerInterface } from '@scena/ruler';
import { withMethods } from 'framework-utils';
import { RulerProps } from '@scena/ruler';

export class NgxRulerInterface {
  @withMethods(METHODS as any)
  protected ruler!: VanillaRuler;
}
// tslint:disable-next-line: no-empty-interface
export interface NgxRulerInterface extends RulerInterface, Required<RulerProps> {}
