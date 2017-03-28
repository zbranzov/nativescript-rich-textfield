import { Observable } from 'data/observable';
import stack = require("ui/layouts/stack-layout");
import { Property, PropertyChangeData } from "ui/core/dependency-observable";
export declare class Common extends Observable {
    constructor();
    greet(): string;
}
export declare class RichTextFieldCommon extends stack.StackLayout {
    message: string;
    private textField;
    private label;
    fieldPaddingTop: string;
    static textPaddingLeftProperty: Property;
    textPaddingLeft: string;
    static iconColorProperty: Property;
    iconColor: string;
    static iconProperty: Property;
    icon: string;
    static iconSizeProperty: Property;
    iconSize: number;
    static fieldHeightProperty: Property;
    fieldHeight: number;
    static fieldColorProperty: Property;
    fieldColor: string;
    static fieldPaddingLeftProperty: Property;
    fieldPaddingLeft: string;
    static fieldPaddingRightProperty: Property;
    fieldPaddingRight: string;
    static fieldBackgroundColorProperty: Property;
    fieldBackgroundColor: string;
    static fieldHintProperty: Property;
    fieldHint: string;
    static fieldHintColorProperty: Property;
    fieldHintColor: string;
    static fieldBorderColorProperty: Property;
    fieldBorderColor: string;
    static fieldBorderWidthProperty: Property;
    fieldBorderWidth: string;
    static fieldLeftBorderWidthProperty: Property;
    fieldLeftBorderWidth: string;
    static fieldRightBorderWidthProperty: Property;
    fieldRightBorderWidth: string;
    static fieldTopBorderWidthProperty: Property;
    fieldTopBorderWidth: string;
    static fieldBottomBorderWidthProperty: Property;
    fieldBottomBorderWidth: string;
    constructor();
    onLoad(eventData: any): void;
    onPropertyChanged(data: PropertyChangeData): void;
    private calculateLabelPadding(stackLayout);
}
export declare class Utils {
    static SUCCESS_MSG(): string;
}
