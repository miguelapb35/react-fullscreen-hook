import React from "react";
import useFullScreen from "./useFullScreen";
import image from "./img.jpg";
import "./index.css";

function App() {
  const { elementFS, triggerFS, exitFS, isFS } = useFullScreen();

  return (
    <>
      <div
        ref={elementFS}
        style={{ background: "honeydew", padding: 30, margin: 30 }}
      >
        <p>
          {isFS ? "It's fullscreen mode !" : "I want to fullscreen this div."}
        </p>

        {isFS && <button onClick={exitFS}>Exit fullscreen</button>}
      </div>
      <button onClick={triggerFS}>Trigger fullscreen</button>

      {/*       <div ref={elementFS} className="imgFS">
        <img src={image} alt="image" />
        <p>
          {isFS ? "It's fullscreen mode !" : "I want to fullscreen this image."}
        </p>
      </div>
      <button onClick={triggerFS}>Trigger fullscreen</button> */}
    </>
  );
}

export default App;
