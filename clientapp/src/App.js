import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./page/home/Home";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Switch>
        <Sidebar />
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
