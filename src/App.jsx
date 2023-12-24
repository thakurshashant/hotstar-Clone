import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
// import Slider from "./Components/Slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />

      {/* <Slider /> */}
    </div>
  );
}

export default App;
