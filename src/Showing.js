import React, { useState } from "react";

export default function Showing() {
  const [show, setShow] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="enter text here"
        value={show}
        onChange={(e) => {
          setShow(e.target.value);
        }}
      />
      <p> {show} </p>
    </>
  );
}
