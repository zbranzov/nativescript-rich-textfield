var RichTextField = require("nativescript-rich-textfield").RichTextField;
var richTextField = new RichTextField();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("greet function", function() {
  it("exists", function() {
    expect(richTextField.greet).toBeDefined();
  });

  it("returns a string", function() {
    expect(richTextField.greet()).toEqual("Hello, NS");
  });
});