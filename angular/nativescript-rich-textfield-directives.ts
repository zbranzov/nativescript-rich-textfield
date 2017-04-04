import { Directive } from '@angular/core'; // TODO: check require .Directive without hacks

@Directive({
    selector: "RichTextField"
})
export class RichTextFieldDirective {
    constructor() { }
}

export const DIRECTIVES = [RichTextFieldDirective];