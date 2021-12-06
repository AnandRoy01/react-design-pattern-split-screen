import SplitScreen from "./SplitScreen";

const LeftHandComponent = ({ name }) => (
  <div style={{ background: "green" }}>{name}</div>
);

const RightHandComponent = ({ message }) => (
  <div style={{ background: "red" }}>{message}</div>
);

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="john" />
      <RightHandComponent message="Hello this is john!" />
    </SplitScreen>
  );
}

export default App;
