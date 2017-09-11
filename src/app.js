import {infoColor, resultColor, errorColor, successColor} from './helpers';
import bar from './components/bar';
import counterModule from './components/design/singleton';
import factoryInt from './components/design/factory';
import builderInt from './components/design/builder';

import decoratorInt from './components/structural/decorator';


export default function App() {
  console.log("App Mount!")

  //Base modules concept
  bar()

  //Design

  //Creational
  console.log("%c Creational:", infoColor);
  //singleton
  counterModule.getInstance().increaseCounter()
  counterModule.getInstance().increaseCounter()
  console.log(
    "%c counterModule! (restricts object creation for a class to only one instance)",
    successColor,
    counterModule.getInstance().getCounter()
  )

  //Factory method - creates objects without specifying the exact class to create
  console.log("%c Factory method - creates objects without specifying the exact class to create", successColor)
  factoryInt()

  //builderInt
  console.log("%c Builder: constructs complex objects by separating construction and representation", successColor)
  builderInt()

  //Structural
  console.log("%c Structural:", infoColor);

  //Decorator
  console.log("%c Decorator: dynamically adds/overrides behaviour in an existing method of an object:", successColor);
  decoratorInt()

}
