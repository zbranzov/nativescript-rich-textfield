import { Observable } from 'data/observable';
import stack = require("ui/layouts/stack-layout");
export declare class Common extends Observable {
    constructor();
    greet(): string;
}
export declare class RichTextFieldCommon extends stack.StackLayout {
    message: string;
    private textField;
    private label;
    stackLayout: stack.StackLayout;
    icon: string;
    fieldHeight: number;
    fieldColor: string;
    fieldPaddingLeft: string;
    fieldPaddingRight: string;
    textPaddingLeft: string;
    fieldBackgroundColor: string;
    iconColor: string;
    fieldHint: string;
    iconSize: number;
    fieldHintColor: string;
    fieldBorderColor: string;
    fieldBorderWidth: string;
    fieldLeftBorderWidth: string;
    fieldRightBorderWidth: string;
    fieldTopBorderWidth: string;
    fieldBottomBorderWidth: string;
    constructor();
    onLoad(eventData: any): void;
    private calculateLabelPadding(stackLayout);
}
export declare class Utils {
    static SUCCESS_MSG(): string;
}
