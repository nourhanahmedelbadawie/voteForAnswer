import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row, Jumbotron } from "react-bootstrap";
import { BrowserRouter as  Link } from "react-router-dom";
const NotFound = () => {
 

  return (
    <div>
      <div>
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col xs="12" className="d-flex justify-content-center align-items-center flex-column">
                <h2 className="mb-2">
                  {" "}
                  <FontAwesomeIcon icon={faExclamationCircle} />
                </h2>
                <p className="mb-2">Error 404</p>
              
                  <Link className="btn" to="/">Back To Home</Link>
                
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
};

export default NotFound;
