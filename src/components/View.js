import React ,{useContext}from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import { store } from "../redux/store";

import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../assets/data/data";
import Newques from "./new";
import Allques from "./Allquestion";
import Leaderbord from "./Leaderbord";
import CartRatio from './cardRatio'

function View() {
  const history = useHistory();
  const { state, dispatch } = useContext(store);
const logout=()=>{
  dispatch({
    type: "adduser",
    payload: "",
  })
  history.push({
    pathname: '/signin',
  })
}

  return (
    <div>
      <Router>
        <Navbar bg="light" variant="light" className="mb-2">
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/allques" className="nav-link">
              Home
            </Link>
            <Link to="/new" className="nav-link">
              New question
            </Link>
            <Link to="/leaderBoard" className="nav-link">
              LeaderBoard
            </Link>
            <Button variant="secondary" onClick={()=>logout()}>Log out</Button>{' '}

          </Nav>
        </Navbar>




        <Switch>
          <Route exact path="/allques" component={Allques}>

          </Route>
          <Route path='/allques/:allquesId' component={CartRatio}  />

          <Route exact path="/view">
            <Redirect to="/allques" />
          </Route>
          <Route exact path="/new">
            <Newques person={state.loginPerson} />
          </Route>
          <Route exact path="/leaderBoard" component={Leaderbord}></Route>
        </Switch>



        <section></section>
      </Router>
    </div>
  );
}
export default View;
