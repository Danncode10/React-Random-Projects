import React, { useRef, useEffect } from "react";

function Component() {
  // 1️⃣ This is like a "cable" to connect to the box div
  const boxRef = useRef(null);

  // 2️⃣ useEffect runs every time the component renders
  useEffect(() => {
    console.log("🔁 Component rendered");
  });

  // 3️⃣ This function runs when you click the button
  function makeRed() {
    // useRef gives us direct access to the HTML div
    console.log("👉 Box element:", boxRef.current);
    boxRef.current.style.backgroundColor = "red";
  }

  return (
    <div>
      {/* 4️⃣ This connects the boxRef to this specific <div> */}
      <div className="box" ref={boxRef}>
        I’m a box
      </div>

      {/* 5️⃣ When clicked, this calls makeRed() */}
      <button onClick={makeRed}>Make Red</button>
    </div>
  );
}

export default Component;
