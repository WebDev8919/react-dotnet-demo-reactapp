import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import React from "react";
import { Row, Col, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link, useParams } from "react-router-dom";
import { message } from "antd";
import { AvForm, AvField } from "availity-reactstrap-validation";

import { userChangePassword } from "../../store/actions";
import logo from "../../assets/images/logo-sm.png";
import CarouselPage from "./CarouselPage";

const ChangePasswordPage = (props) => {
  const { token } = useParams();
  const dispatch = useDispatch();

  const { forgetError } = useSelector((state) => ({
    forgetError: state.ForgetPassword.forgetError,
  }));

  const [messageApi, contextHolder] = message.useMessage();

  React.useEffect(() => {
    if (forgetError)
      messageApi.open({
        type: "warning",
        content: forgetError,
      });
  }, [forgetError, messageApi]);

  function handleValidSubmit(event, values) {
    dispatch(userChangePassword({ ...values, token }, props.history));
  }

  return (
    <React.Fragment>
      {contextHolder}
      <MetaTags>
        <title>Change Password</title>
      </MetaTags>
      <div className="auth-page">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4} md={5} className="col-xxl-3">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      <Link to="/dashboard" className="d-block auth-logo">
                        <img src={logo} alt="" height="28" />{" "}
                        <span className="logo-txt">CABINET</span>
                      </Link>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Change Password</h5>
                        <p className="text-muted mt-2">
                          Change Password with CABINET.
                        </p>
                      </div>

                      <AvForm
                        className="custom-form mt-4"
                        onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                      >
                        <div className="mb-3">
                          <AvField
                            name="password"
                            label="New Password"
                            className="form-control"
                            placeholder="Enter password"
                            type="password"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <AvField
                            name="password2"
                            label="Confirm Password"
                            className="form-control"
                            placeholder="Enter confirm password"
                            type="password"
                            validate={{
                              match: {
                                value: "password",
                                errorMessage: "Password does not match.",
                              },
                            }}
                            required
                          />
                        </div>
                        <div className="mb-3 mt-4">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </AvForm>
                    </div>
                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © {new Date().getFullYear()} CABINET
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

ChangePasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ChangePasswordPage);
