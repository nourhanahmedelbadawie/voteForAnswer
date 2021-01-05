import React ,{useContext} from 'react';
import { store } from "../redux/store";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button ,Alert
  } from "react-bootstrap";


const CardScoreView = (props) => {

   
    const { state, dispatch } = useContext(store);

  
    let img=state.allPersons.filter(obj => {
      return obj.id === props.person.id
    })


  return (
    <div>

  <Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src={img[0].avatarURL} />
  <Card.Body>
    <Card.Title>{props.person.author}</Card.Title>
    <Card.Text>
    <p>Number of answers is {Object.keys(props.person.answers).length}</p>
    <p>Number of questions is {props.person.questions.length}</p>
    </Card.Text>
  </Card.Body>
  <Alert color="secondary">
       Score {props.person.score}
      </Alert>
</Card>
    </div>
  );
};

export default CardScoreView;