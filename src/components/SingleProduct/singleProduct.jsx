import React, { useContext } from "react";
import { Store } from "../../contexts/Store";

import { pdtData } from "../../assets/data/data";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useToasts } from "react-toast-notifications";
import "../Home/Home.scss";

function SingleProduct(props) {
  const productId = props.match.params.pdtId;

  // using Toast in notifications
  const { addToast } = useToasts();
  const popUpAlert = (content) => {
    addToast(content, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  // update cart items in store
  const { addProduct, productItems, increaseProduct } = useContext(Store);

  const isInCart = (product) => {
    return !!productItems.find((item) => item.id === product.id);
  };
  return (
    <div>
      <Container className="bg mb-4">
        <Row>
        <Col className="title p-4 mb-4 mt-4 " xs='12'>
            <h2>Product view</h2>
          </Col>
          <Col  xs='12'>

          <Col md="4" className="mb-4 products" xs="12">
            <Card style={{ width: "18rem" }}>
          

              <Card.Img variant="top" src={pdtData[productId].img} />
              <Card.Body>
                <Card.Title>{pdtData[productId].name}</Card.Title>

                <Card.Text>
                  <h4>{pdtData[productId].price} $</h4>
                  <div>
                    <h5>{pdtData[productId].cat} </h5>
                    {isInCart(pdtData[productId]) && (
                      <button
                        onClick={() => {
                          increaseProduct(pdtData[productId]);
                          popUpAlert(
                            "An item has been added to the card successfully"
                          );
                        }}
                        className="btn btn-outline-primary btn-sm"
                      >
                        {" "}
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </button>
                    )}

                    {!isInCart(pdtData[productId]) && (
                      <button
                        onClick={() => {
                          addProduct(pdtData[productId]);
                          popUpAlert(
                            "An item has been added to the card successfully"
                          );
                        }}
                        className="btn btn-primary btn-sm"
                      >
                        {" "}
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                    )}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SingleProduct;
