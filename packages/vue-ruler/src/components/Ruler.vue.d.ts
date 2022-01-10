import VanillaRuler, { RulerProps, RulerInterface } from "@scena/ruler";

interface VueRulerInterface
    extends RulerProps, RulerInterface {
    $el: HTMLElement;
    $_ruler: VanillaRuler;
    $props: RulerProps;
}

declare const VueRuler: VueRulerInterface;
type VueRuler = VueRulerInterface;

export default VueRuler;
