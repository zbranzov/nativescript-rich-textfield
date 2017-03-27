import {Observable} from 'data/observable';

export class HelloWorldModel extends Observable {
  public message: string;
  color = "red";
  text = "Custom";
  border="1";
  height = 50;
  fieldHeight = 50;

  constructor() {
    super();

    //setTimeout(() => this.set("fieldHeight", "60"),5000);
  }
}