import React, { useContext, useState } from "react";
import Home from "./components/Home/Home";
import TotalOrder from "./components/TotalOrder/TotalOrder";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./components/Cart/Cart";
import { pdtData } from "./assets/data/data";
import { CSSTransition } from "react-transition-group";

import SubmitOrder from "./components/SubmitOrder/submitOrder";

import { ToastProvider } from "react-toast-notifications";
import SingleProduct from "./components/SingleProduct/singleProduct";
import { Sugar } from "react-preloaders";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Navbar,
  NavDropdown,
  Form,
  Nav,
} from "react-bootstrap";
import { Store } from "./contexts/Store";

import "./App.scss";

function App() {
  const { productItems } = useContext(Store);

  // ===================================Search
  const [teams, setTeams] = useState(pdtData);
  const [search, setSearch] = useState("");
  const [focus, setfocus] = useState(false);

  // appear search result on foucs
  const handleInputFocus = () => {
    setfocus(true);
  };
  const handleInputBlur = () => {
    setfocus(false);
  };

  // display search result

  const handleChange = (e) => {
    const test = pdtData.filter((team) => {
      return team.name.toLowerCase().startsWith(e.target.value.toLowerCase());
    });

    setSearch(e.target.value);
    setTeams(test);
  };
const renderTextToInput=(el)=>{
  document.getElementById('searchInput').value=el.name
  setSearch(el.name)


}
  return (
    <ToastProvider>
      <React.Fragment>
        <Router>
          <div className="App">
            <Container>
              <Row>
                <Col xs="12">
                  <Col xs="12" className="my-4 pt-4 pb-4 pl-0 pr-0">
                    <Navbar expand="lg">
                      <Navbar.Brand>
                        {" "}
                        <Link to="/">ORGNO food</Link>
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                          <NavDropdown
                            title=""
                            id="profileImg"
                            style={{
                              backgroundImage:
                                "url(" +
                                "https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg" +
                                ")",
                            }}
                          >
                            <NavDropdown.Item href="">
                              View/ Edit Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="">
                              Sign Out
                            </NavDropdown.Item>
                          </NavDropdown>

                          <NavDropdown title="Cart" id="cart">
                            <NavDropdown.Item>
                              <Link to="/cart">
                                Show product{" "}
                                <mark> ({productItems.length})</mark>
                              </Link>
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                        <Form inline
>
                          <input
                            autoComplete="off"
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            value={search}
                            onChange={handleChange}
                            onFocus={handleInputFocus}
                            onBlur={()=>{ setTimeout(()=> { handleInputBlur() }, 150);
                            }}
                            id="searchInput"
                          />

                          {focus === true && (
                                  <CSSTransition in={focus} timeout={200} classNames="my-node">

                            <ul id="searchList" >
                              {teams.length === 0 ? (
                                <li>No item</li>
                              ) : (
                                teams.map((item, index) => {
                                  return (
                                    <li
                                      key={index}
                                      onClick={()=>{handleInputBlur();renderTextToInput(item)} }
                                    >
                                      <Link to={`/product/${item.id}`}>
                                        {item.name}
                                      </Link>
                                    </li>
                                  );
                                })
                              )}
                            </ul>
                            </CSSTransition>

                          )}
                        </Form>
                      </Navbar.Collapse>
                    </Navbar>
                  </Col>

                  {/* ====================Views================== */}
                  <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route
                      exact
                      path="/"
                      render={() => {
                        return <Redirect to="/home" />;
                      }}
                    />
                    <Route exact path="/submit" component={SubmitOrder}></Route>
                    <Route exact path="/order" component={TotalOrder}></Route>
                    <Route exact path="/cart" component={Cart}></Route>

                    <Route
                      exact
                      path="/product/:pdtId"
                      render={(props) => <SingleProduct {...props} />}
                    ></Route>

                    <Route path="*" exact={true} component={NotFound} />

                    {/* ====================================== */}
                  </Switch>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ====================Loader================== */}
          <Sugar
            time={2000}
            color={"#eb8025"}
            background="#ffff"
            className="load"
            animation="slide"
          />
          {/* ====================================== */}
        </Router>
      </React.Fragment>
    </ToastProvider>
  );
}

export default App;
