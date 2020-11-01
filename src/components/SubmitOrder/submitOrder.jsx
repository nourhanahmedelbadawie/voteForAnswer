import React, { useState, useContext } from "react";
import { Store } from "../../contexts/Store";
import { Formik } from "formik";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import MapPicker from "react-google-map-picker";
import Geocode from "react-geocode";

import "./submitOrder.scss";

function SubmitOrder() {
  // get total price
  const { productItems } = useContext(Store);

  const getTotalPrice = (arr) => {
    let total = 0;
    arr.forEach((el) => {
      total = total + el.quantity * el.price;
    });
    return total;
  };

  // Form details
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    address: "",
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexName = /\d/;
    const regexPhone = /^[0-9]*$/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.name) {
      errors.name = "Name is required";
    } else if (regexName.test(values.name) === true) {
      errors.name = "Invalid Name";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!regexPhone.test(values.phone)) {
      errors.phone = "Invalid Phone";
    }
    if (!values.address) {
      errors.address = "address is required";
    }
    return errors;
  };

  const submitForm = async (values, actions) => {
    console.log(document.querySelector('[type="submit"]')[0]);
    document.querySelector('[type="submit"]').classList.add("disabled-btn");

    Swal.fire(
      "Congratulation!",
      "your Order have submitted successfuly",
      "success"
    ).then(() => {
      actions.resetForm({
        values: {
          name: "",
          phone: "",
          email: "",
          address: "",
        },
      });
    });
  };

  // pick location from Map
  const DefaultLocation = { lat: 31.212285, lng: 29.923821 };
  const DefaultZoom = 10;
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);
  const [address, setaddress] = useState("");

  let handleChangeLocation = (lat, lng) => {
    setLocation({ lat: lat, lng: lng });
  };

  let handleChangeZoom = (newZoom) => {
    setZoom(newZoom);
  };

  let handleResetLocation = () => {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  };

  Geocode.setApiKey("AIzaSyCJ7Ut5ra6Z4RdmbSpeliaGlFG6Ten8A4g");

  Geocode.fromLatLng(location.lat, location.lng).then(
    (response) => {
      const addressfromMap = response.results[0].formatted_address;
      setaddress(addressfromMap);
      if (location !== defaultLocation) {
        document.getElementById("address").value = address;
      }
    },
    (error) => {
      console.error(error);
    }
  );
  Geocode.setLanguage("en");
  // Model to pop up MAP
  const [show, setShow] = useState(false);

  return (
    <div>
      <Container className="bg">
        <Row>
          <Col className="title p-4 mb-4 mt-4 ">
            <h2>Submit your order</h2>
          </Col>
          <Col xs="12">
            <p>
              {" "}
              <mark className="submittotal">
                Total Price: <span>{getTotalPrice(productItems)}</span> ${" "}
              </mark>
            </p>
          </Col>
          <Col xs="12" className="d-flex onepdt px-2 py-4 shopping-cart">
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={submitForm}
            >
              {(formik) => {
                const {
                  values,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched,
                  handleBlur,
                  isValid,
                  dirty,
                } = formik;
                return (
                  <form onSubmit={handleSubmit} className="col-12 p-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputname1"
                        placeholder="Name"
                        type="name"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.name && touched.name ? "input-error" : null
                        }
                      />
                    </div>
                    {errors.name && touched.name && (
                      <span className="error">{errors.name}</span>
                    )}

                    <div className="form-group">
                      <input
                        type="phone"
                        className="form-control"
                        id="exampleInputphone1"
                        placeholder="Phone"
                        type="phone"
                        name="phone"
                        id="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.phone && touched.phone ? "input-error" : null
                        }
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <span className="error">{errors.phone}</span>
                    )}

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email ? "input-error" : null
                        }
                      />
                    </div>
                    {errors.email && touched.email && (
                      <span className="error">{errors.email}</span>
                    )}

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputAddress1"
                        placeholder="Address"
                        type="text"
                        name="address"
                        id="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.address && touched.address
                            ? "input-error"
                            : null
                        }
                      />

                      <a className="getLocation" onClick={() => setShow(true)}>
                        get location from Map
                      </a>
                    </div>

                    {errors.address && touched.address && (
                      <span className="error">{errors.address}</span>
                    )}

                    <Modal
                      show={show}
                      onHide={() => setShow(false)}
                      dialogClassName="modal-90w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                          Pick your location
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Col className="d-flex justify-content-around" xs="12">
                          <button
                            className=" p-2 mb-2"
                            onClick={handleResetLocation}
                          >
                            Reset Location
                          </button>
                          <button
                            className=" p-2 mb-2"
                            onClick={() => setShow(false)}
                          >
                            get location
                          </button>
                        </Col>
                        <label className="mr-2">Latitute:</label>
                        <input
                          className="mr-2"
                          type="text"
                          value={location.lat}
                          disabled
                        />
                        <label className="mr-2">Longitute:</label>
                        <input
                          className="mr-2"
                          type="text"
                          value={location.lng}
                          disabled
                        />

                        <MapPicker
                          defaultLocation={defaultLocation}
                          zoom={zoom}
                          style={{ height: "700px" }}
                          onChangeLocation={handleChangeLocation}
                          onChangeZoom={handleChangeZoom}
                          apiKey="AIzaSyCJ7Ut5ra6Z4RdmbSpeliaGlFG6Ten8A4g"
                        />
                      </Modal.Body>
                    </Modal>
                    <Col xs="12" className="mt-2">
                      <Button
                        type="submit"
                        className="btn btn-primary col-4"
                        type="submit"
                        className={
                          dirty && isValid ? "button" : "button disabled-btn"
                        }
                        disabled={!(dirty && isValid)}
                      >
                        Submit
                      </Button>
                    </Col>
                  </form>
                );
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SubmitOrder;
