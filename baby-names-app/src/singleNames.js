import React from "react";

const SingleNames = ({ babyName, i, onClick }) => {
  return (
    <p key={i} className={babyName.sex} onClick={onClick}>
      {babyName.name}
    </p>
  );
};

export default SingleNames;
