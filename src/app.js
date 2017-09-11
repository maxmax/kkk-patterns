import bar from './components/bar';
import counterModule from './components/design/singleton';

export default function App() {
  console.log("App Mount!")

  //Base modules concept
  bar()

  //Design patterns "singleton"
  //Creational
  counterModule.getInstance().increaseCounter()
  counterModule.getInstance().increaseCounter()
  console.log("counterModule!", counterModule.getInstance().getCounter())

}
