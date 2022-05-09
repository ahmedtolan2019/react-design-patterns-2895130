import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./SplitScreen";

export const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "red" }}>Left!</h1>;
};
export const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: "green" }}>Right!</h1>;
};

function App() {
  return <SplitScreen left={LeftHandComponent} right={RightHandComponent} />;
}

export default App;
