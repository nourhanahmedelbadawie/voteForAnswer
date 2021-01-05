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
    CardTitle, CardSubtitle, Button ,
    ProgressBar ,Alert
  } from "react-bootstrap";


const CartRatio = () => {
  const { state, dispatch } = useContext(store);
  const [progress,setprogress]=useState(true)
  const history = useHistory();

console.log(      history)

  useEffect(
    () => {
      history.location.state.quesType==="answ" ? setprogress(true) :setprogress(false)

    },
    [],
  );



let currentQs=history.location.state.quesProfile
const addRatio=(num)=>{
  dispatch({
    type: "answquestion",
    payload: {id:currentQs.id,
  opt:num ,
author:state.loginPerson
},
  })
  
setprogress(true)
}


let opt1Ratio=currentQs.optionOne.votes.length > 0 ?(parseInt(currentQs.optionOne.votes.length) /parseInt(currentQs.optionOne.votes.length)  +parseInt(currentQs.optionTwo.votes.length) )*100 :0
let opt2Ratio=currentQs.optionTwo.votes.length > 0 ?(parseInt(currentQs.optionTwo.votes.length) /(parseInt(currentQs.optionTwo.votes.length) +parseInt(currentQs.optionOne.votes.length)))*100 :0


 let img=state.allPersons.filter(obj => {
      return obj.id === currentQs.author
    })
    
   


  return (
    <div>

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img[0].avatarURL} />
  <Card.Body>
    <Card.Title>{currentQs.author}</Card.Title>
    <Card.Text>

{
  progress ?
<div>
<mark>option 1 
  {
    currentQs.optionOne.votes.includes(state.loginPerson) && 
    <Alert variant="danger">
    <strong>Your Vote</strong>
     </Alert>
  }
  
  </mark> <ProgressBar now={opt1Ratio} label={`${opt1Ratio}%`} />

  <br/>
  <br/>
<mark>option 2
{
    currentQs.optionTwo.votes.includes(state.loginPerson) && 
    <Alert variant="danger">
 <strong>Your Vote</strong>
  </Alert>
  }
  </mark> <ProgressBar now={opt2Ratio} label={`${opt2Ratio}%`} />
</div>
:
   <section>
   <div><span>  <Alert  variant="success">
{
     currentQs.optionOne.text
}
</Alert></span>
<Button variant="success" onClick={()=>addRatio(1)}>vote option1</Button>{' '}</div>
<br/>
<br/>
<div
><span> 
   <Alert  variant="warning">
   {
     currentQs.optionTwo.text
}</Alert>
</span>
<Button variant="warning" onClick={()=>addRatio(2)}>vote option2</Button>{' '}</div>
     
 </section>
}

    </Card.Text>
    
  </Card.Body>
</Card>
    </div>
  );
};

export default CartRatio;