import { Observable } from 'data/observable';
import * as app from 'application';
import * as dialogs from 'ui/dialogs';
import textFieldModule = require("ui/text-field");
import label = require("ui/label");
import color = require("color");
import stack = require("ui/layouts/stack-layout");
import font = require('ui/styling/font');
import observable = require("data/observable");
import builder = require("ui/builder")

export class Common extends Observable {

  constructor() {
    super();
  }

  public greet() {
    return "Hello, NS";
  }
}

export class RichTextFieldCommon extends stack.StackLayout {
  public message: string;
  private textField: textFieldModule.TextField;
  private label: label.Label;
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

  constructor() {
    super();

    this.fieldHeight = 40;
    this.textField = new textFieldModule.TextField();
    this.textField.hint = "Custom hint";
    this.textField.setInlineStyle("placeholder-color:rgba(255,255,255, 0.5); padding-left: 20;padding-right:40;width: 100%;color:rgba(255,255,255, 1);");
    this.textField.setInlineStyle(`background-color:rgba(255,255,255, 0.4);padding-top: 10;padding-bottom: 10;`);
    this.textField.height = this.fieldHeight;
    this.textField.borderColor = new color.Color("white");

    this.iconSize = 20;
    this.label = new label.Label();
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
    if (stackLayout.icon) {
      let icon = stackLayout.icon;
      if (typeof icon === "number") {
        icon = String.fromCharCode(icon);
      }
      this.label.text = icon;
    }

    if (stackLayout.fieldHeight) {
      this.label.setInlineStyle(`height: ${stackLayout.fieldHeight};`);
      this.textField.setInlineStyle(`height: ${stackLayout.fieldHeight};`);
      //vertical alignment doesnt work
      let labelPadding = this.calculateLabelPadding(stackLayout);
      this.label.setInlineStyle(`padding-top: ${labelPadding};`);
      if (this.height < stackLayout.fieldHeight) {
        this.height = stackLayout.fieldHeight;
      }
    }

    if (stackLayout.textPaddingLeft) {
      this.textField.setInlineStyle(`padding-left: ${stackLayout.textPaddingLeft};`);
    }

    if (stackLayout.fieldPaddingRight) {
      this.textField.setInlineStyle(`padding-right: ${stackLayout.fieldPaddingRight};`);
    }

    if (stackLayout.fieldPaddingLeft) {
      this.label.setInlineStyle(`padding-left: ${stackLayout.fieldPaddingLeft};`);
    }

    if (stackLayout.fieldBackgroundColor) {
      this.label.setInlineStyle(`background-color: ${stackLayout.fieldBackgroundColor};`);
      this.textField.setInlineStyle(`background-color: ${stackLayout.fieldBackgroundColor};`);
    }

    if (stackLayout.iconColor) {
      this.label.setInlineStyle(`color: ${stackLayout.iconColor};`);
    }

    if (stackLayout.fieldColor) {
      this.textField.setInlineStyle(`color: ${stackLayout.fieldColor};`);
    }

    if (stackLayout.iconSize) {
      this.iconSize = stackLayout.iconSize;
      this.label.fontSize = stackLayout.iconSize;
    }

    if (stackLayout.fieldHint) {
      this.textField.hint = stackLayout.fieldHint;
    }

    if (stackLayout.fieldHintColor) {
      this.textField.setInlineStyle(`placeholder-color: ${stackLayout.fieldHintColor};`);
    }

    if (stackLayout.fieldBorderColor) {
      this.textField.setInlineStyle(`border-color: ${stackLayout.fieldBorderColor};`);
      this.label.setInlineStyle(`border-color: ${stackLayout.fieldBorderColor};`);
    }

    if (stackLayout.fieldBorderWidth) {
      this.textField.borderTopWidth = stackLayout.fieldBorderWidth;
      this.textField.borderBottomWidth = stackLayout.fieldBorderWidth;
      this.textField.borderRightWidth = stackLayout.fieldBorderWidth;
      this.label.borderTopWidth = stackLayout.fieldBorderWidth;
      this.label.borderBottomWidth = stackLayout.fieldBorderWidth;
      this.label.borderLeftWidth = stackLayout.fieldBorderWidth;
    }

    if (stackLayout.fieldLeftBorderWidth) {
      this.label.borderLeftWidth = stackLayout.fieldLeftBorderWidth;
    }

    if (stackLayout.fieldRightBorderWidth) {
      this.textField.borderRightWidth = stackLayout.fieldRightBorderWidth;
    }

    if (stackLayout.fieldTopBorderWidth) {
      this.textField.borderTopWidth = stackLayout.fieldTopBorderWidth;
      this.label.borderTopWidth = stackLayout.fieldTopBorderWidth;
    }

    if (stackLayout.fieldBottomBorderWidth) {
      this.textField.borderBottomWidth = stackLayout.fieldBottomBorderWidth;
      this.label.borderBottomWidth = stackLayout.fieldBottomBorderWidth;
    }
  }

  private calculateLabelPadding(stackLayout: RichTextFieldCommon) {
    let labelPadding = (Number(stackLayout.fieldHeight) - Number(this.iconSize)) / 2;
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

export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

    setTimeout(() => {
      dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
    }, 2000);

    return msg;
  }
}

