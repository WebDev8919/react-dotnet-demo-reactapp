import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Row, Col, Alert, Container } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { registerUser, apiError } from "../../store/actions";
import logo from "../../assets/images/logo-sm.png";
import CarouselPage from "./CarouselPage";

const Register = (props) => {
  const dispatch = useDispatch();

  const { user, registrationError } = useSelector((state) => ({
    user: state.Account.user,
    registrationError: state.Account.registrationError,
    loading: state.Account.loading,
  }));

  const handleValidSubmit = (values) => {
    dispatch(registerUser(values, props.history));
  };

  useEffect(() => {
    dispatch(apiError(""));
  }, [dispatch]);

  return (
    <React.Fragment>
      <MetaTags>
        <title>Register</title>
      </MetaTags>
      <div className="auth-page">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4} md={5} className="col-xxl-3">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      <Link to="/home" className="d-block auth-logo">
                        <img src={logo} alt="" height="28" />{" "}
                        <span className="logo-txt">CABINET</span>
                      </Link>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Register Account</h5>
                        <p className="text-muted mt-2">
                          Get your free CABINET account now.
                        </p>
                      </div>
                      <AvForm
                        className="needs-validation custom-form mt-4 pt-2"
                        onValidSubmit={(e, v) => {
                          handleValidSubmit(v);
                        }}
                      >
                        {user && user ? (
                          <Alert color="success">
                            Register User Successfully
                          </Alert>
                        ) : null}

                        {registrationError ? (
                          <Alert color="danger">This email already used</Alert>
                        ) : null}

                        <div className="mb-3">
                          <AvField
                            name="fullName"
                            label="Full Name"
                            type="text"
                            required
                            placeholder="Enter full name"
                          />
                        </div>
                        <div className="mb-3">
                          <AvField
                            name="preferredname"
                            label="Preferred Name(Optional)"
                            type="text"
                            placeholder="Enter preferredname"
                          />
                        </div>
                        <div className="mb-3">
                          <AvField
                            id="email"
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <AvField
                            name="password"
                            label="Password"
                            type="password"
                            required
                            placeholder="Enter Password"
                          />
                        </div>
                        <div className="mb-3">
                          <AvField
                            name="password2"
                            label="Repeat password"
                            type="password"
                            required
                            placeholder="Confirm Password"
                            validate={{
                              match: {
                                value: "password",
                                errorMessage: "Password does not match.",
                              },
                            }}
                          />
                        </div>
                        <div className="mb-4">
                          <p className="mb-0">
                            By registering you agree to the CABINET{" "}
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                        <div className="mb-3">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </AvForm>

                      <div className="mt-5 text-center">
                        <p className="text-muted mb-0">
                          Already have an account ?{" "}
                          <Link
                            to="/login"
                            className="text-primary fw-semibold"
                          >
                            {" "}
                            Login{" "}
                          </Link>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © {new Date().getFullYear()} CABINET
                        <i className="mdi mdi-heart text-danger"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <CarouselPage />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register;
