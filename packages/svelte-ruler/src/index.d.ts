/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";
import { RulerInterface, RulerProps } from "@scena/ruler";

export default class RulerComponent extends SvelteComponentTyped<
    RulerProps,
    {}
> { }

export default interface RulerComponent extends RulerInterface {
}
export * from "@scena/ruler";
