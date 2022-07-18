import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent.js";
import TestComponent from "./TestComponent.js";


// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>{"Now"}</h1>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}

export default App;
