/* eslint-disable react/jsx-no-undef */
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import ClassComp from "./Components/ClassComp";
import CompA from "./Props/CompA";
import CompB from "./Props/CompB";
import CompC from "./Props/CompC";
import raju from "./raju";
import Component1 from "./Component1";

function App() {
  return (
    <div className="App">
      <ClassComp></ClassComp>
      <CompA></CompA>
      <Component1></Component1>
    </div>
  );
}

export default App;
