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
import { Property, PropertyChangeData, PropertyMetadataSettings, PropertyChangedCallback } from "ui/core/dependency-observable";
import { PropertyMetadata } from "ui/core/proxy";
import { isAndroid } from "platform";

export class Common extends Observable {

  constructor() {
    super();
  }

  public greet() {
    return "Hello, NS";
  }
}

let propertyMetadataSettings = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

function onPropertyChanged(data: PropertyChangeData) {
  let richTextField = <RichTextFieldCommon>data.object;
  richTextField.onPropertyChanged(data);
}

export class RichTextFieldCommon extends stack.StackLayout {
  public message: string;
  private textField: textFieldModule.TextField;
  private label: label.Label;
  fieldPaddingTop: string;

  public static textPaddingLeftProperty = new Property("textPaddingLeft", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get textPaddingLeft() {
    return this._getValue(RichTextFieldCommon.textPaddingLeftProperty);
  }

  set textPaddingLeft(value: string) {
    this._setValue(RichTextFieldCommon.textPaddingLeftProperty, value);
  }

  // public static fieldPaddingTopProperty = new Property("fieldPaddingTop", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  // get fieldPaddingTop() {
  //   return this._getValue(RichTextFieldCommon.fieldPaddingTopProperty);
  // }

  // set fieldPaddingTop(value: string) {
  //   this._setValue(RichTextFieldCommon.fieldPaddingTopProperty, value);
  // }

  public static iconColorProperty = new Property("iconColor", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get iconColor() {
    return this._getValue(RichTextFieldCommon.iconColorProperty);
  }

  set iconColor(value: string) {
    this._setValue(RichTextFieldCommon.iconColorProperty, value);
  }

  public static iconProperty = new Property("icon", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get icon() {
    return this._getValue(RichTextFieldCommon.iconProperty);
  }

  set icon(value: string) {
    this._setValue(RichTextFieldCommon.iconProperty, value);
  }

  public static iconSizeProperty = new Property("iconSize", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get iconSize() {
    return this._getValue(RichTextFieldCommon.iconSizeProperty);
  }

  set iconSize(value: number) {
    this._setValue(RichTextFieldCommon.iconSizeProperty, value);
  }

  public static fieldHeightProperty = new Property("fieldHeight", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldHeight() {
    return this._getValue(RichTextFieldCommon.fieldHeightProperty);
  }

  set fieldHeight(value: number) {
    this._setValue(RichTextFieldCommon.fieldHeightProperty, value);
  }

  public static fieldColorProperty = new Property("fieldColor", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldColor() {
    return this._getValue(RichTextFieldCommon.fieldColorProperty);
  }

  set fieldColor(value: string) {
    this._setValue(RichTextFieldCommon.fieldColorProperty, value);
  }

  public static fieldPaddingLeftProperty = new Property("fieldPaddingLeft", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldPaddingLeft() {
    return this._getValue(RichTextFieldCommon.fieldPaddingLeftProperty);
  }

  set fieldPaddingLeft(value: string) {
    this._setValue(RichTextFieldCommon.fieldPaddingLeftProperty, value);
  }

  public static fieldPaddingRightProperty = new Property("fieldPaddingRight", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldPaddingRight() {
    return this._getValue(RichTextFieldCommon.fieldPaddingRightProperty);
  }

  set fieldPaddingRight(value: string) {
    this._setValue(RichTextFieldCommon.fieldPaddingRightProperty, value);
  }

  public static fieldBackgroundColorProperty = new Property("fieldBackgroundColor", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldBackgroundColor() {
    return this._getValue(RichTextFieldCommon.fieldBackgroundColorProperty);
  }

  set fieldBackgroundColor(value: string) {
    this._setValue(RichTextFieldCommon.fieldBackgroundColorProperty, value);
  }

  public static fieldHintProperty = new Property("fieldHint", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldHint() {
    return this._getValue(RichTextFieldCommon.fieldHintProperty);
  }

  set fieldHint(value: string) {
    this._setValue(RichTextFieldCommon.fieldHintProperty, value);
  }

  public static fieldHintColorProperty = new Property("fieldHintColor", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldHintColor() {
    return this._getValue(RichTextFieldCommon.fieldHintColorProperty);
  }

  set fieldHintColor(value: string) {
    this._setValue(RichTextFieldCommon.fieldHintColorProperty, value);
  }

  public static fieldBorderColorProperty = new Property("fieldBorderColor", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldBorderColor() {
    return this._getValue(RichTextFieldCommon.fieldBorderColorProperty);
  }

  set fieldBorderColor(value: string) {
    this._setValue(RichTextFieldCommon.fieldBorderColorProperty, value);
  }

  public static fieldBorderWidthProperty = new Property("fieldBorderWidth", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldBorderWidth() {
    return this._getValue(RichTextFieldCommon.fieldBorderWidthProperty);
  }

  set fieldBorderWidth(value: string) {
    this._setValue(RichTextFieldCommon.fieldBorderWidthProperty, value);
  }

  public static fieldLeftBorderWidthProperty = new Property("fieldLeftBorderWidth", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldLeftBorderWidth() {
    return this._getValue(RichTextFieldCommon.fieldLeftBorderWidthProperty);
  }

  set fieldLeftBorderWidth(value: string) {
    this._setValue(RichTextFieldCommon.fieldLeftBorderWidthProperty, value);
  }

  public static fieldRightBorderWidthProperty = new Property("fieldRightBorderWidth", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldRightBorderWidth() {
    return this._getValue(RichTextFieldCommon.fieldRightBorderWidthProperty);
  }

  set fieldRightBorderWidth(value: string) {
    this._setValue(RichTextFieldCommon.fieldRightBorderWidthProperty, value);
  }

  public static fieldTopBorderWidthProperty = new Property("fieldTopBorderWidth", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldTopBorderWidth() {
    return this._getValue(RichTextFieldCommon.fieldTopBorderWidthProperty);
  }

  set fieldTopBorderWidth(value: string) {
    this._setValue(RichTextFieldCommon.fieldTopBorderWidthProperty, value);
  }

  public static fieldBottomBorderWidthProperty = new Property("fieldBottomBorderWidth", "RichTextFieldCommon", new PropertyMetadata("", propertyMetadataSettings, onPropertyChanged));

  get fieldBottomBorderWidth() {
    return this._getValue(RichTextFieldCommon.fieldBottomBorderWidthProperty);
  }

  set fieldBottomBorderWidth(value: string) {
    this._setValue(RichTextFieldCommon.fieldBottomBorderWidthProperty, value);
  }

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
      let labelPadding = this.calculateLabelPadding(stackLayout);
      this.label.setInlineStyle(`padding-top: ${labelPadding};`);
      if (this.height < stackLayout.fieldHeight) {
        this.height = stackLayout.fieldHeight;
      }
    }

    // if (stackLayout.fieldPaddingTop) {
    //   this.label.setInlineStyle(`padding-top: ${stackLayout.fieldPaddingTop};`);
    // }

  }

  onPropertyChanged(data: PropertyChangeData) {
    switch (data.property.name) {

      case "iconColor": {
        this.label.setInlineStyle(`color: ${data.newValue};`);
        break;
      }

      case "icon": {
        let icon = data.newValue;
        if (typeof icon === "number") {
          icon = String.fromCharCode(icon);
        }
        this.label.text = icon;
        break;
      }

      case "fieldHeight": {
        this.label.setInlineStyle(`height: ${data.newValue};`);
        this.textField.setInlineStyle(`height: ${data.newValue};`);
        // vertical alignment doesnt work
        let labelPadding = this.calculateLabelPadding(<RichTextFieldCommon>data.object);
        this.label.setInlineStyle(`padding-top: ${labelPadding};`);
        if (this.height < Number(data.newValue)) {
          this.height = data.newValue;
        }
        break;
      }

      case "textPaddingLeft": {
        this.textField.setInlineStyle(`padding-left: ${data.newValue};`);
        break;
      }

      case "fieldPaddingRight": {
        this.textField.setInlineStyle(`padding-right: ${data.newValue};`);
        break;
      }

      case "fieldPaddingLeft": {
        this.label.setInlineStyle(`padding-left: ${data.newValue};`);
        break;
      }

      case "fieldBackgroundColor": {
        this.label.setInlineStyle(`background-color: ${data.newValue};`);
        this.textField.setInlineStyle(`background-color: ${data.newValue};`);
        break;
      }

      case "fieldColor": {
        this.textField.setInlineStyle(`color: ${data.newValue};`);
        break;
      }

      case "iconSize": {
        this.iconSize = data.newValue;
        this.label.fontSize = data.newValue;
        break;
      }

      case "fieldHint": {
        this.textField.hint = data.newValue;
        break;
      }

      case "fieldHintColor": {
        this.textField.setInlineStyle(`placeholder-color: ${data.newValue};`);
        break;
      }

      case "fieldBorderColor": {
        this.textField.setInlineStyle(`border-color: ${data.newValue};`);
        this.label.setInlineStyle(`border-color: ${data.newValue};`);
        break;
      }

      case "fieldBorderWidth": {
        let fieldBorder = data.newValue;
        this.textField.borderTopWidth = fieldBorder;
        this.textField.borderBottomWidth = fieldBorder;
        this.textField.borderRightWidth = fieldBorder;
        this.label.borderTopWidth = fieldBorder;
        this.label.borderBottomWidth = fieldBorder;
        this.label.borderLeftWidth = fieldBorder;
        break;
      }

      case "fieldLeftBorderWidth": {
        this.label.borderLeftWidth = data.newValue;
        break;
      }

      case "fieldRightBorderWidth": {
        this.textField.borderRightWidth = data.newValue;
        break;
      }

      case "fieldTopBorderWidth": {
        this.textField.borderTopWidth = data.newValue;
        this.label.borderTopWidth = data.newValue;
        break;
      }

      case "fieldBottomBorderWidth": {
        this.textField.borderBottomWidth = data.newValue;
        this.label.borderBottomWidth = data.newValue;
        break;
      }
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

