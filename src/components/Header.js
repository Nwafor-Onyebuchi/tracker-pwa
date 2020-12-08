import React, { Fragment } from "react";

export function Header({ name }) {
  return (
    <Fragment>
      <h2 className="header">{name}</h2>
    </Fragment>
  );
}
