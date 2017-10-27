import React from "react";
import Box from "./Box";
import BoxWrapper from "./BoxWrapper";
import TransitionGroup from "react-transition-group/TransitionGroup";

class Boxes extends React.Component {
  renderBoxes = () =>
    this.props.data.map((box, index) => {
      return <BoxWrapper key={box.id} box={box} onRemove={this.props.onRemoveBox}/>;
    });

  render = () => <div style={{ display: "flex" }}>
      <TransitionGroup style={{ display: "flex"}}>
        {this.renderBoxes()}
      </TransitionGroup>
    </div>;
}

export default Boxes;
