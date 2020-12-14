import React, { Fragment, useContext } from "react";
import image from "../assets/avatar.png";
import { UserContext } from "../context/UserContext";

export function Header({ name }) {
  const { user, signout } = useContext(UserContext);
  // console.log(user);
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 className="header">{name}</h2>

        {user && (
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="tooltip"
          >
            <img
              src={image}
              alt="Profile place holder"
              height="40"
              width="40"
              style={{ borderRadius: 50, cursor: "pointer" }}
              onClick={signout}
            />
            <span className="tooltiptext">Logout</span>
            <h5
              style={{
                marginLeft: "12px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {user.displayName}
            </h5>
          </div>
        )}
      </div>
      <hr />
    </Fragment>
  );
}
