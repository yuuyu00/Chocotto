import React from "react";

import Header from "./Components/Header";
import Atk from "./Components/Atk";

function App() {
  return (
    <div style={{ marginTop: "0", marginBottom: "0", paddingTop: "80px" }}>
      <Header />
      <div
        style={{
          marginRight: "10vw",
          marginLeft: "10vw",
          marginTop: "0",
          marginBottom: "0"
        }}
      >
        <Atk />
      </div>
    </div>
  );
}

export default App;
