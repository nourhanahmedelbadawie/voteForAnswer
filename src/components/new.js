import React  ,{useState ,useContext} from "react";
import {SaveQuestion} from '../assets/helper/helpers'
import { store } from "../redux/store";

import { Button, Form, Container, Row, Col } from "react-bootstrap";
function Newques(person) {

    const [newques1, addnewques1]=useState("")
    const [newques2, addnewques2]=useState("")
    const { state, dispatch } = useContext(store)

  

    const addNewQuestion=async (e)=>{
e.preventDefault()

const newques=  await SaveQuestion(person.person, newques1, newques2)
await dispatch({
    type: "addquestion",
    payload: newques,
  })
  addnewques1("")
  addnewques2("")

    }

return (
    <div>
   <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
            <h3>Add new question</h3>
            <br></br>

              <Form onSubmit={(e)=>addNewQuestion(e)} >
<Form.Group>
  <Form.Control onChange={(e)=>addnewques1(e.target.value)} size="lg" type="text" placeholder="option 1" />
  <br/>
  <Form.Control onChange={(e)=>addnewques2(e.target.value)} size="lg" type="text" placeholder="optrion2" />


</Form.Group>  
<Button variant="primary" type="submit" disabled={newques1==="" ||newques2==="" ? true :false}   >
                  Submit
                </Button>
              </Form>

            </Col>
          </Row>
        </Container>

  </div>
)




}
export default Newques