import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import DepartmentShow from "./pages/DepartmentShow";
import Items from "./pages/Items";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/departments/:id" component={DepartmentShow} />
          <Route exact path="/departments/:id/items" component={Items} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
