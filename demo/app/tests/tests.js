var RichTextField = require("nativescript-rich-textfield").RichTextField;
var richTextField = new RichTextField();

describe("check fieldColor", function() {

  it("color is applied to textfield", function() {
    richTextField.fieldColor = "red";

    expect(richTextField.getChildAt(1).color.name).toEqual("red");
  });

  it("argb color is applied to textfield", function() {
    richTextField.fieldColor = "rgba(138,43,226,0.5)";

    expect(richTextField.getChildAt(1).color.r).toEqual(138);
    expect(richTextField.getChildAt(1).color.g).toEqual(43);
    expect(richTextField.getChildAt(1).color.b).toEqual(226);
    expect(richTextField.getChildAt(1).color.a).toEqual(128);
  });
});

describe("check icon", function() {

  it("is applied to label", function() {
    richTextField.icon = "&#xf123;";

    expect(richTextField.getChildAt(0).text).toEqual("&#xf123;");
  });

  it("hex format is applied to label", function() {
    richTextField.icon = "0xf123";

    expect(richTextField.getChildAt(0).text).toEqual("0xf123");
  });
});

describe("check fieldHeight", function() {
  richTextField.fieldHeight = 50;

  it("is applied to label", function() {
    expect(richTextField.getChildAt(0).height).toEqual(50);
  });

  it("is applied to textfield", function() {
    expect(richTextField.getChildAt(1).height).toEqual(50);
  });
});

describe("check fieldPaddingLeft", function() {
  richTextField.fieldPaddingLeft = 50;

  it("is applied to label", function() {
    expect(richTextField.getChildAt(0).style.paddingLeft).toEqual(50);
  });
});

describe("check fieldPaddingRight", function() {
  richTextField.fieldPaddingRight = 45;

  it("is applied to textfield", function() {
    expect(richTextField.getChildAt(1).style.paddingRight).toEqual(45);
  });
});

describe("check textPaddingLeft", function() {
  richTextField.textPaddingLeft = 30;

  it("is applied to textfield", function() {
    expect(richTextField.getChildAt(1).style.paddingLeft).toEqual(30);
  });
});

describe("check fieldBackgroundColor", function() {

  it("color is applied to textfield", function() {
    richTextField.fieldBackgroundColor = "blue";
    expect(richTextField.getChildAt(1).style.backgroundColor.name).toEqual("blue");
  });

  it("color is applied to label", function() {
    richTextField.fieldBackgroundColor = "blue";
    expect(richTextField.getChildAt(0).style.backgroundColor.name).toEqual("blue");
  });

  it("argb color is applied to textfield", function() {
    richTextField.fieldBackgroundColor = "rgba(255,0,200,0.3)";

    expect(richTextField.getChildAt(1).style.backgroundColor.r).toEqual(255);
    expect(richTextField.getChildAt(1).style.backgroundColor.g).toEqual(0);
    expect(richTextField.getChildAt(1).style.backgroundColor.b).toEqual(200);
    expect(richTextField.getChildAt(1).style.backgroundColor.a).toEqual(77);
  });

  it("argb color is applied to label", function() {
    richTextField.fieldBackgroundColor = "rgba(255,0,200,0.3)";

    expect(richTextField.getChildAt(0).style.backgroundColor.r).toEqual(255);
    expect(richTextField.getChildAt(0).style.backgroundColor.g).toEqual(0);
    expect(richTextField.getChildAt(0).style.backgroundColor.b).toEqual(200);
    expect(richTextField.getChildAt(0).style.backgroundColor.a).toEqual(77);
  });
});

describe("check iconColor", function() {

  it("color is applied to label", function() {
    richTextField.iconColor = "green";

    expect(richTextField.getChildAt(0).color.name).toEqual("green");
  });

  it("argb color is applied to label", function() {
    richTextField.iconColor = "rgba(138,43,226,0.5)";

    expect(richTextField.getChildAt(0).color.r).toEqual(138);
    expect(richTextField.getChildAt(0).color.g).toEqual(43);
    expect(richTextField.getChildAt(0).color.b).toEqual(226);
    expect(richTextField.getChildAt(0).color.a).toEqual(128);
  });
});

describe("check fieldHint", function() {

  it("text is applied to textfield", function() {
    richTextField.fieldHint = "Custom hint text";

    expect(richTextField.getChildAt(1).hint).toEqual("Custom hint text");
  });
});

describe("check iconSize", function() {

  it("is applied to label", function() {
    richTextField.iconSize = 10;

    expect(richTextField.getChildAt(0).fontSize).toEqual(10);
  });
});

describe("check fieldHintColor", function() {

  it("color is applied to textfield", function() {
    richTextField.fieldHintColor = "yellow";

    expect(richTextField.getChildAt(1).style.placeholderColor.name).toEqual("yellow");
  });

  it("argb color is applied to textfield", function() {
    richTextField.fieldHintColor = "rgba(100,200,0,1)";

    expect(richTextField.getChildAt(1).style.placeholderColor.r).toEqual(100);
    expect(richTextField.getChildAt(1).style.placeholderColor.g).toEqual(200);
    expect(richTextField.getChildAt(1).style.placeholderColor.b).toEqual(0);
    expect(richTextField.getChildAt(1).style.placeholderColor.a).toEqual(255);
  });
});

describe("check fieldBorderColor", function() {

  it("color is applied to textfield", function() {
    richTextField.fieldBorderColor = "green";

    expect(richTextField.getChildAt(1).borderColor.name).toEqual("green");
  });

  it("argb color is applied to textfield", function() {
    richTextField.fieldBorderColor = "rgba(100,200,0,1)";

    expect(richTextField.getChildAt(1).borderColor.r).toEqual(100);
    expect(richTextField.getChildAt(1).borderColor.g).toEqual(200);
    expect(richTextField.getChildAt(1).borderColor.b).toEqual(0);
    expect(richTextField.getChildAt(1).borderColor.a).toEqual(255);
  });

  it("color is applied to label", function() {
    richTextField.fieldBorderColor = "blue";

    expect(richTextField.getChildAt(0).borderColor.name).toEqual("blue");
  });

  it("argb color is applied to label", function() {
    richTextField.fieldBorderColor = "rgba(101,201,1,1)";

    expect(richTextField.getChildAt(0).borderColor.r).toEqual(101);
    expect(richTextField.getChildAt(0).borderColor.g).toEqual(201);
    expect(richTextField.getChildAt(0).borderColor.b).toEqual(1);
    expect(richTextField.getChildAt(0).borderColor.a).toEqual(255);
  });
});

describe("check fieldBorderWidth", function() {

  it("is applied to textfield", function() {
    richTextField.fieldBorderWidth = "2";

    expect(richTextField.getChildAt(1).borderTopWidth).toEqual(2);
    expect(richTextField.getChildAt(1).borderBottomWidth).toEqual(2);
    expect(richTextField.getChildAt(1).borderRightWidth).toEqual(2);
  });

   it("is applied to lable", function() {
    richTextField.fieldBorderWidth = "2";

    expect(richTextField.getChildAt(0).borderTopWidth).toEqual(2);
    expect(richTextField.getChildAt(0).borderBottomWidth).toEqual(2);
    expect(richTextField.getChildAt(0).borderLeftWidth).toEqual(2);
  });
});

describe("check fieldLeftBorderWidth", function() {

   it("is applied to lable", function() {
    richTextField.fieldLeftBorderWidth = "4";

    expect(richTextField.getChildAt(0).borderLeftWidth).toEqual(4);
  });
});

describe("check fieldRightBorderWidth", function() {

   it("is applied to textfield", function() {
    richTextField.fieldRightBorderWidth = "4";
    
    expect(richTextField.getChildAt(1).borderRightWidth).toEqual(4);
  });
});

describe("check fieldTopBorderWidth", function() {

   it("is applied to textfield", function() {
    richTextField.fieldTopBorderWidth = "2";
    
    expect(richTextField.getChildAt(1).borderTopWidth).toEqual(2);
  });

  it("is applied to label", function() {
    richTextField.fieldTopBorderWidth = "2";
    
    expect(richTextField.getChildAt(0).borderTopWidth).toEqual(2);
  });
});

describe("check fieldBottomBorderWidth", function() {

   it("is applied to textfield", function() {
    richTextField.fieldBottomBorderWidth = "1";
    
    expect(richTextField.getChildAt(1).borderBottomWidth).toEqual(1);
  });

  it("is applied to label", function() {
    richTextField.fieldBottomBorderWidth = "1";
    
    expect(richTextField.getChildAt(0).borderBottomWidth).toEqual(1);
  });
});