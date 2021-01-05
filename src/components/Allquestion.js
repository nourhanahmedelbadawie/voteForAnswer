import React, { useEffect, useState, useContext } from "react";

import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Tab,
  Tabs,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import { store } from "../redux/store";

import { getAllQuestions } from "../assets/helper/helpers";

import CardView from "./cardView";
function Allques() {
  const history = useHistory();
  const { state, dispatch } = useContext(store);

  let questions = state.question;
  console.log('============================"questions"===================')

  console.log(questions)

  questions.sort(function (a, b) {
    return b.timestamp - a.timestamp;
  });

  const [key, setKey] = useState("home");

  const Answerquestion = questions.filter(function (qs) {
    return (qs.optionOne.votes.includes(state.loginPerson) ||qs.optionTwo.votes.includes(state.loginPerson)) ?true :false

  });

  const unAnswerquestion = questions.filter(function (qs) {
    return  (!qs.optionOne.votes.includes(state.loginPerson) &&! qs.optionTwo.votes.includes(state.loginPerson)) ?true :false


  });

  return (
    <div>
      <Container>
        <Row>
          <Col>
          <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Answer" title="Answer">
          {Answerquestion.map((el, i) => (
            <CardView key={i} person={el} quesType="answ" />
          ))}
        </Tab>
        <Tab eventKey="UnAnswer" title="UnAnswer">
          {unAnswerquestion.map((el, i) => (
            <CardView key={i} person={el} quesType="unansw"  />
          ))}{" "}
        </Tab>
      </Tabs>
   
   
          </Col>
   
        </Row>
      </Container>

    </div>
  );
}
export default Allques;
