import React, { Component } from "react";
import Boxes from "./Boxes";

class DemoThree extends Component {
  state = {
    boxes: [
      { id: 1, title: "box 1" },
      { id: 2, title: "box 2" },
      { id: 3, title: "box 3" }
    ]
  };

  addBox = title => {
    let newId = 0;
    const { boxes } = this.state;
    if (boxes.length) {
      newId = boxes[boxes.length - 1].id + 1;
    }
    const newBoxes = boxes.slice();
    newBoxes.push({ id: newId, title: title });
    this.setState({ boxes: newBoxes });
  };

  removeBox = id => {
    const { boxes } = this.state;
    this.setState({ boxes: boxes.filter(box => box.id !== id) });
  };

  render = () => {
    return (
      <div>
        <Boxes data={this.state.boxes} onRemoveBox={this.removeBox} />
        <button
          style={{ width: 100, top: 600, left: 20, position: "absolute" }}
          onClick={() => this.addBox("new box")}
        >
          add
        </button>
      </div>
    );
  };
}

export default DemoThree;
