import { Observable } from 'data/observable';
import * as app from 'application';
import * as dialogs from 'ui/dialogs';
import textFieldModule = require("ui/text-field");
import label = require("ui/label");
import color = require("color");
import stack = require("ui/layouts/stack-layout");
import font = require('ui/styling/font');
import observable = require("data/observable");
import builder = require("ui/builder");
import { View, Property } from "ui/core/view";
import { isAndroid } from "platform";


// function onPropertyChanged(data: PropertyChangeData) {
//   let richTextField = <RichTextField>data.object;
//   richTextField.onPropertyChanged(data);
// }



export class RichTextField extends stack.StackLayout {
  public textField: textFieldModule.TextField;
  public label: label.Label;
  fieldHeight;
  iconSize;
  fieldBorderWidth;
  fieldTopBorderWidth;
  fieldBottomBorderWidth;

  constructor() {
    super();

    this.textField = new textFieldModule.TextField();
    this.label = new label.Label();

    this.fieldHeight = 40;
    this.height = this.fieldHeight;
    this.textField.hint = "Custom hint";
    this.textField.setInlineStyle("placeholder-color:rgba(255,255,255, 0.5); padding-left: 20;padding-right:40;width: 100%;color:rgba(255,255,255, 1);");
    this.textField.setInlineStyle(`background-color:rgba(255,255,255, 0.4);padding-top: 12;padding-bottom: 8;`);
    this.textField.height = this.fieldHeight;
    this.textField.borderColor = new color.Color("white");
    this.iconSize = 20;
    this.label.text = "\uf007";
    this.label.setInlineStyle(`background-color: rgba(255,255,255, 0.4);color:rgba(255,255,255, 0.5);padding-left: 40;margin-top: 0;`);
    this.label.setInlineStyle(`padding-top: 10;padding-bottom: 10;font-family: FontAwesome,fontawesome-webfont;vertical-align: center;`);
    this.label.height = this.fieldHeight;
    this.label.fontSize = this.iconSize;
    this.label.borderColor = new color.Color("white");

    this.orientation = "horizontal";
    this.addChild(this.label);
    this.addChild(this.textField);
    this.addEventListener(stack.StackLayout.loadedEvent, this.onLoad, this)
  }

  onLoad(eventData) {
    let stackLayout = eventData.object;

    if (Number(stackLayout.fieldHeight) > 40) {
      this.textField.setInlineStyle("padding-bottom:10;");
    }

    if (stackLayout.fieldHeight) {
      this.label.setInlineStyle(`height: ${stackLayout.fieldHeight};`);
      this.textField.setInlineStyle(`height: ${stackLayout.fieldHeight};`);
      //vertical alignment doesnt work
      let labelPadding = RichTextField.calculateLabelPadding(stackLayout);
      this.label.setInlineStyle(`padding-top: ${labelPadding};`);
      if (this.height < stackLayout.fieldHeight) {
        this.height = stackLayout.fieldHeight;
      }
    }

    if (stackLayout.fieldPaddingTop) {
      this.label.setInlineStyle(`padding-top: ${stackLayout.fieldPaddingTop};`);
    }

  }


  public static calculateLabelPadding(stackLayout: RichTextField) {
    let labelPadding = (Number(stackLayout.fieldHeight) - Number(stackLayout.iconSize)) / 2;
    if (stackLayout.fieldBorderWidth) {
      labelPadding = labelPadding - Number(stackLayout.fieldBorderWidth);
    } else if (stackLayout.fieldTopBorderWidth) {
      labelPadding = labelPadding - Number(stackLayout.fieldTopBorderWidth) / 2;
    } else if (stackLayout.fieldBottomBorderWidth) {
      labelPadding = labelPadding - Number(stackLayout.fieldBottomBorderWidth) / 2;
    }

    return labelPadding;
  }
}

export const secureProperty = new Property<RichTextField, boolean>({
  name: "secure", defaultValue: false, valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.textField.secure = newV;
  }
});
secureProperty.register(RichTextField);

export const textPaddingLeftProperty = new Property<RichTextField, string>({
  name: "textPaddingLeft", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.textField.setInlineStyle(`padding-left: ${newV};`);
  }
});
textPaddingLeftProperty.register(RichTextField);

export const fieldPaddingTopProperty = new Property<RichTextField, string>({
  name: "fieldPaddingTop", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.label.setInlineStyle(`padding-top: ${newV};`);
  }
});
fieldPaddingTopProperty.register(RichTextField);

export const iconColorProperty = new Property<RichTextField, string>({
  name: "iconColor", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.label.setInlineStyle(`color: ${newV};`);
  }
});
iconColorProperty.register(RichTextField);

export const iconProperty = new Property<RichTextField, string>({
  name: "icon", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    let icon = newV;
    if (icon.startsWith("0x")) {
      icon = String.fromCharCode(Number(icon));
    }
    richTxtField.label.text = icon;
  }
});
iconProperty.register(RichTextField);

export const iconSizeProperty = new Property<RichTextField, number>({
  name: "iconSize", defaultValue: 0, valueChanged: (richTxtField, oldV, newV) => {
    //richTxtField.iconSize = newV;
    richTxtField.label.fontSize = newV;
  }
});
iconSizeProperty.register(RichTextField);

export const fieldHeightProperty = new Property<RichTextField, number>({
  name: "fieldHeight", defaultValue: 0, valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.label.setInlineStyle(`height: ${newV};`);
    richTxtField.textField.setInlineStyle(`height: ${newV};`);
    // vertical alignment doesnt work
    let labelPadding = RichTextField.calculateLabelPadding(<RichTextField>richTxtField);
    richTxtField.label.setInlineStyle(`padding-top: ${labelPadding};`);
    if (richTxtField.height < Number(newV)) {
      richTxtField.height = newV;
    }
  }
});
fieldHeightProperty.register(RichTextField);

export const fieldColorProperty = new Property<RichTextField, string>({
  name: "fieldColor", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.textField.setInlineStyle(`color: ${newV};`);
  }
});
fieldColorProperty.register(RichTextField);

export const fieldPaddingLeftProperty = new Property<RichTextField, string>({
  name: "fieldPaddingLeft", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.label.setInlineStyle(`padding-left: ${newV};`);
  }
});
fieldPaddingLeftProperty.register(RichTextField);

export const fieldPaddingRightProperty = new Property<RichTextField, string>({
  name: "fieldPaddingRight", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.textField.setInlineStyle(`padding-right: ${newV};`);
  }
});
fieldPaddingRightProperty.register(RichTextField);

export const fieldBackgroundColorProperty = new Property<RichTextField, string>({
  name: "fieldBackgroundColor", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.label.setInlineStyle(`background-color: ${newV};`);
    richTxtField.textField.setInlineStyle(`background-color: ${newV};`);
  }
});
fieldBackgroundColorProperty.register(RichTextField);

export const fieldHintProperty = new Property<RichTextField, string>({
  name: "fieldHint", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.textField.hint = newV;
  }
});
fieldHintProperty.register(RichTextField);

export const fieldHintColorProperty = new Property<RichTextField, string>({
  name: "fieldHintColor", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.textField.setInlineStyle(`placeholder-color: ${newV};`);
  }
});
fieldHintColorProperty.register(RichTextField);

export const fieldBorderColorProperty = new Property<RichTextField, string>({
  name: "fieldBorderColor", defaultValue: "", valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.textField.setInlineStyle(`border-color: ${newV};`);
    richTxtField.label.setInlineStyle(`border-color: ${newV};`);
  }
});
fieldBorderColorProperty.register(RichTextField);

export const fieldBorderWidthProperty = new Property<RichTextField, number>({
  name: "fieldBorderWidth", defaultValue: 0, valueChanged: (richTxtField, oldV, newV) => {

    let fieldBorder = newV;
    richTxtField.textField.borderTopWidth = fieldBorder;
    richTxtField.textField.borderBottomWidth = fieldBorder;
    richTxtField.textField.borderRightWidth = fieldBorder;
    richTxtField.label.borderTopWidth = fieldBorder;
    richTxtField.label.borderBottomWidth = fieldBorder;
    richTxtField.label.borderLeftWidth = fieldBorder;
  }
});
fieldBorderWidthProperty.register(RichTextField);

export const fieldLeftBorderWidthProperty = new Property<RichTextField, number>({
  name: "fieldLeftBorderWidth", defaultValue: 0, valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.label.borderLeftWidth = newV;
  }
});
fieldLeftBorderWidthProperty.register(RichTextField);

export const fieldRightBorderWidthProperty = new Property<RichTextField, number>({
  name: "fieldRightBorderWidth", defaultValue: 0, valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.textField.borderRightWidth = newV;
  }
});
fieldRightBorderWidthProperty.register(RichTextField);

export const fieldTopBorderWidthProperty = new Property<RichTextField, number>({
  name: "fieldTopBorderWidth", defaultValue: 0, valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.textField.borderTopWidth = newV;
    richTxtField.label.borderTopWidth = newV;
  }
});
fieldTopBorderWidthProperty.register(RichTextField);

export const fieldBottomBorderWidthProperty = new Property<RichTextField, number>({
  name: "fieldBottomBorderWidth", defaultValue: 0, valueChanged: (richTxtField, oldV, newV) => {
    richTxtField.textField.borderBottomWidth = newV;
        richTxtField.label.borderBottomWidth = newV;
  }
});
fieldBottomBorderWidthProperty.register(RichTextField);

