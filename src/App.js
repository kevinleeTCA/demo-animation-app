import React, { Component } from "react";
import DemoOne from "./demoOne/demoOne";
import DemoTwo from "./demoTwo/demoTwo";
import DemoThree from "./demoThree/demoThree";

class App extends Component {
  renderDemo = () => {
    // return <DemoOne />;
    return <DemoTwo />;
    // return <DemoThree />;
  };

  render() {
    return <div className="App">{this.renderDemo()}</div>;
  }
}

export default App;
