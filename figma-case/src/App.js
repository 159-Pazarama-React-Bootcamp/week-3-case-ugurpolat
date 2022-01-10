import "./App.css";
import Hello from "./Hello/Hello";
import LoginPage from "./LoginPage/LoginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/login-page" component={LoginPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
