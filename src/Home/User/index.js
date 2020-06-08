import React from "react";

const UserInfo = ({ user }) => (
  <div className="row">
    <div className="col">
      <div className="col-md-6">
        <h1>Hi {user}!</h1>
      </div>
    </div>
  </div>
);
export default UserInfo;
