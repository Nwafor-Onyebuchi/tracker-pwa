import React, { Fragment, useContext } from "react";
import image from "../assets/avatar.png";
import logo from "../assets/icon512.png";
import { UserContext } from "../context/UserContext";
import { Button, Image, OverlayTrigger, Popover } from "react-bootstrap";

export function Header({ name }) {
  const { user, signout } = useContext(UserContext);
  const popover = user && (
    <Popover id="popover-basic" style={{ padding: "10px" }}>
      <Popover.Title as="h3">{`Log out?`}</Popover.Title>
      <Button variant="success" className="btn-block" onClick={signout}>
        Yes
      </Button>
    </Popover>
  );

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {/* <h2 className="header" onClick={signout}>
          {name}
        </h2> */}
        <Image src={logo} rounded height="50" width="50" />

        {user && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Image
                src={image}
                rounded
                height="20"
                width="20"
                style={{ borderRadius: "50%", cursor: "pointer" }}
              />
            </OverlayTrigger>
            <h5
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontSize: "16px",
                marginTop: "5px",
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
