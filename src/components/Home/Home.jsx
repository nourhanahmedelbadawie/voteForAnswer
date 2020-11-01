import React, { useContext, useRef } from "react";
import { Store } from "../../contexts/Store";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { pdtData } from "../../assets/data/data";
import { useToasts } from "react-toast-notifications";
import { Link as LinkTo } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./Home.scss";
function Home() {
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

  // navigate to product detail
  const history = useHistory();
  const navigateTopdt = (e, pdId) => {
    e.preventDefault();
    history.push(`/product/${pdId}`);
  };
  //switch view of product list
  const textInput = useRef(null);
  const changePdtView = (num) => {
    console.log(textInput);
    if (num === 1) {
      textInput.current.style.gridTemplateColumns = "1fr 1fr 1fr";
      document
        .querySelectorAll(".card")
        .forEach((el) => el.classList.remove("listItem"));

      document
        .querySelectorAll(".card")
        .forEach((el) => el.classList.add("gridItem"));
    } else {
      textInput.current.style.gridTemplateColumns = "1fr";
      document
        .querySelectorAll(".card")
        .forEach((el) => el.classList.remove("gridItem"));

      document
        .querySelectorAll(".card")
        .forEach((el) => el.classList.add("listItem"));
    }
  };
  return (
    <div>
      <header>
        <Container className="mb-4">
          <Row>
            <Col>
              <section id="head">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        className="head-img"
                        src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Vegetables-PNG/Organic_Vegetables_PNG_Picture.png?m=1507172105"
                        alt=""
                      />
                    </div>
                    <div className="col-md-5 offset-1 head-text ">
                      <h6>BEST QUALITY PRODUCTS</h6>
                      <h1>Join the Organic Movement!</h1>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sapien. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sapien.
                      </p>
                      <LinkTo
                        className="my-btn btn"
                        to="products"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={50}
                      >
                        {" "}
                        <i className="fas fa-cart-arrow-down"></i> Shop Now
                      </LinkTo>
                    </div>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="products mt-4" id="products">
        <Container>
          <Row>
            <Col xs="12">
              <td width="120">
                <h5 className="mb-2">Switch View</h5>
                <div className="toggle">
                  <input
                    type="radio"
                    value="on"
                    name="radio"
                    onChange={() => changePdtView(1)}
                  />
                  <input
                    type="radio"
                    value="off"
                    name="radio"
                    onChange={() => changePdtView(2)}
                  />
                  <div className="toggle__pointer"></div>
                </div>
              </td>
            </Col>
            <Col className="grid" xs="12" ref={textInput}>
              {pdtData.map((data, key) => {
                return (
                  <div className="mb-4" xs="1" key={key}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        onClick={(e) => navigateTopdt(e, key)}
                        variant="top"
                        src={data.img}
                      />
                      <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                          <h4>{data.price} $</h4>
                          <div>
                            <h5>{data.cat} </h5>
                            {isInCart(data) && (
                              <button
                                onClick={() => {
                                  increaseProduct(data);
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

                            {!isInCart(data) && (
                              <button
                                onClick={() => {
                                  addProduct(data);
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
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
export default Home;
