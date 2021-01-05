import React ,{useEffect ,useState ,useContext} from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch  ,useHistory } from 'react-router-dom'; 
import {getAllUsers} from '../assets/helper/helpers'
import { store } from "../redux/store";

 function Signin() {

  const history = useHistory();

const [select, setselect]=useState("")

const { state, dispatch } = useContext(store);

let user=state.allPersons

     
 
const getSelect=(e)=>{
  e.preventDefault();
history.push({
  pathname: '/view',
})
dispatch({
  type: "adduser",
  payload: select,
})
}



  return (
    <div>
      <section>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
            <h3>Sign in</h3>

              <Form onSubmit={(e)=>getSelect(e)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Select user</Form.Label>
                  <Form.Control as="select"  onChange={(e)=>setselect(e.target.value)}>
                  <option selected disabled>pick one</option>
                    {
                      user.map((el,i)=>(<option value={el.id} key={i}>{el.id}</option>))
                    }

    </Form.Control>
                </Form.Group>

            

                <Button variant="primary" type="submit" disabled={select==="" ? true :false}   >
                  Submit
                </Button>
              </Form>

            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
export default Signin;
