import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { DIRECTIVES } from "./nativescript-rich-textfield-directives";

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class RichTextFieldModule { }

registerElement("RichTextField", () => require("../").RichTextField);