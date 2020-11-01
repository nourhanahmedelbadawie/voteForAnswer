import React, { useContext } from "react";
import { Store } from "../../contexts/Store";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../TotalOrder/TotalOrder.scss";
import { Link } from "react-router-dom";

function TotalOrder() {
  // render and update cart items  in the store
  const { productItems } = useContext(Store);

  return (
    <div>
      <Container>
        <Row>
          <Col xs="12">
            <Card>
              <Col className="title p-4 mb-4 mt-4 ">
                <h2>Product view</h2>
              </Col>
              <Card.Body>
                {productItems.length === 0 && (
                  <Row>
                    <Col
                      className="d-flex px-2 py-4 align-items-center justify-content-center"
                      xs="12"
                    >
                      No item
                    </Col>
                  </Row>
                )}
                {productItems.map((product, index) => {
                  return (
                    <Col
                      xs="12"
                      className="d-flex onepdt px-2 justify-items-space-between align-items-center py-4 shopping-cart"
                      key={index}
                    >
                      <Col className="image" xs="2">
                        <img src={product.img} alt="" />
                      </Col>

                      <Col className="total-price " xs="4">
                        <p>
                          Price per item <strong>{product.price}</strong> $
                        </p>
                        <br />
                        <p>
                          {" "}
                          Number of items <strong>
                            {product.quantity}
                          </strong>{" "}
                        </p>
                        <br />
                      </Col>
                      <Col xs="3">
                        <span>
                          Total price : {product.price * product.quantity}
                        </span>
                      </Col>
                    </Col>
                  );
                })}
                {productItems.length > 0 && (
                  <Col className="d-flex px-2 py-4 shopping-cart align-items-center justify-content-center">
                    <Link className="btn" to="/submit">
                      Submit
                    </Link>
                  </Col>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default TotalOrder;
