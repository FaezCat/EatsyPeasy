import React from "react";
// import classNames from "classnames";

// import "components/Button.scss";

export default function BusinessHours(props) {
  const {business_hours} = props;
  const listItems = business_hours.map((day) =>
    <li key={day}>
      {day}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}