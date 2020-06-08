import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";

import UserInfo from "./User";
const HomePage = (props) => {
  const { user } = props;
  return (
    <>
      <UserInfo user={user} />
      <div className="row">
        <div className="col-md-6">
          <Search />
          <p style={{ textAlign: "right" }}>
            <Link to="/login">Logout</Link>
          </p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { authentication } = state;
  const { user } = authentication;
  return { user };
};

export default connect(mapStateToProps)(HomePage);
