import React ,{useEffect ,useState ,useContext} from "react";
import { store } from "../redux/store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from "react-bootstrap";

const CardView = (props) => {
  const { state, dispatch } = useContext(store);


  const history = useHistory();


 let img=state.allPersons.filter(obj => {
      return obj.id === props.person.author
    })

    let unix_timestamp = props.person.timestamp
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    


  return (
    <div className="mb-2">

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img[0].avatarURL} />
  <Card.Body>
    <Card.Title>{props.person.author}</Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Button variant="primary" onClick={()=>history.push({
  pathname: `/allques/${props.person.id}`,
  state: { quesProfile: props.person,quesType: props.quesType   }


  
})}>show</Button>
<h5>{formattedTime}</h5>
  </Card.Body>
</Card>
    </div>
  );
};

export default CardView;