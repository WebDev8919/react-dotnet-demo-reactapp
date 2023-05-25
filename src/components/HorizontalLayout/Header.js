import React from "react";
import PropTypes from "prop-types";
import "react-drawer/lib/react-drawer.css";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions";
import UserMenu from "../CommonForBoth/TopbarDropdown/UserMenu";
import logo from "../../assets/images/logo-sm.png";

const Header = (props) => {
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/home" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="24" />
                </span>
                <span className="logo-lg">
                  <img src={logo} alt="" height="24" />
                  <span className="logo-txt">CABINET</span>
                </span>
              </Link>

              <Link to="/home" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logo} alt="" height="24" />
                </span>
                <span className="logo-lg">
                  <img src={logo} alt="" height="24" />
                  <span className="logo-txt">CABINET</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="d-flex">
            <UserMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
};

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header));
