import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./SplitScreen";

export const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "red" }}>{name}</h1>;
};
export const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "green" }}>{message}</h1>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Left" />
      <RightHandComponent message="messgae!!" />
    </SplitScreen>
  );
}

export default App;
