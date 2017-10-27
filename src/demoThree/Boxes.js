import React from "react";
import Box from "./Box";
import BoxWrapper from "./BoxWrapper";
import ConstantStyles from "../constantStyles";
import { NodeGroup } from "react-move";
import { easeExpIn } from "d3-ease";

class Boxes extends React.Component {
  _onStart = (box, index) => ({
    marginTop: 100,
    marginLeft: 0,
    opacity: 0
  });

  _onEnter = (box, index) => ({
    marginTop: [0],
    opacity: [1],
    timing: {
      duration: ConstantStyles.REACT_MOVE_DURATION
    }
  });

  _onLeave = (box, index) => ({
    opacity: [0],
    marginLeft: [-300],
    timing: {
      duration: ConstantStyles.REACT_MOVE_DURATION
    }
  });

  // style with curves
// _onLeave = (box, index) => ({
//   opacity: [0],
//   marginLeft: [-300],
//   timing: {
//     duration: ConstantStyles.REACT_MOVE_DURATION,
//     ease: easeExpIn
//   }
// });


  //multiple style and duration
// _onLeave = (box, index) => [
//   {
//     opacity: [0],
//     timing: {
//       duration: 2 * ConstantStyles.REACT_MOVE_DURATION
//     }
//   },
//   {
//     marginLeft: [-150],
//     timing: {
//       duration: ConstantStyles.REACT_MOVE_DURATION
//     }
//   }
// ];


  render = () => {
    return (
      <NodeGroup
        data={this.props.data}
        keyAccessor={box => box.id}
        start={this._onStart}
        enter={this._onEnter}
        leave={this._onLeave}
      >
        {nodes => (
          <div style={{ display: "flex" }}>
            {nodes.map(({ key, data, state }) => (
              <div key={key} style={{ ...state }}>
                <Box box={data} onRemove={this.props.onRemoveBox} />
              </div>
            ))}
          </div>
        )}
      </NodeGroup>
    );
  };
}

export default Boxes;
