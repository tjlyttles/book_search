import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        clear: "both",
        height: 300,
        padding: 30,
        textAlign: "right",
        backgroundImage: `url(https://cdn.wallpapersafari.com/78/56/uiAMhK.jpg)`
      }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
