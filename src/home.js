import logo from "./logo.svg";
import "./App.css";
import { withReducer } from "./withReducer";

const Home = () => {
  return (
    <div style={{ height: "100vh" }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>HOME</h1>
    </div>
  );
};

const myReducerForTheComponent = (state = { routeName: "HOME" }, action) => {
  switch (action.type) {
    case "ONE":
      return state;
    default:
      return state;
  }
};

export default withReducer("homeReducer", myReducerForTheComponent)(Home);
