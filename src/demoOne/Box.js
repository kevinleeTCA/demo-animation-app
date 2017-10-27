import React, { Component } from "react";
import { TweenMax } from "gsap";
import ConstantStyles from "../constantStyles";

const boxStyle = {
  width: 300,
  height: 300,
  backgroundColor: "darkturquoise",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  borderStyle: "solid",
  margin: 10
};

//stateful component
class Box extends Component {
  componentWillAppear = callBack => {
    console.log("componentWillAppear");
    TweenMax.from(this.refs.boxNode, ConstantStyles.TWEENMAX_DURATION, {
      marginTop: 100,
      opacity: 0,
      onComplete: callBack
    });
  };

  componentDidAppear = () => {
    console.log("componentDidAppear");
  };
  //
  componentWillEnter = callBack => {
    console.log("componentWillEnter");
    TweenMax.from(this.refs.boxNode, ConstantStyles.TWEENMAX_DURATION, {
      marginTop: 100,
      opacity: 0,
      onComplete: callBack
    });
  };

  componentDidEnter = () => {
    console.log("componentDidEnter");
  };


  componentWillLeave = callBack => {
    console.log("componentWillLeave");
    TweenMax.to(this.refs.boxNode, ConstantStyles.TWEENMAX_DURATION, {
      width: 0,
      opacity: 0,
      onComplete: callBack
    });
  };

  componentDidLeave = () => {
    console.log("componentDidLeave");
  };

  render = () => {
    const { box, onRemove } = this.props;
    return (
      <div style={boxStyle} ref="boxNode">
        {box.title}
        <button style={{ marginTop: 20,  }} onClick={() => onRemove(box.id)}>
          Remove
        </button>
      </div>
    );
  };
}

//stateless component
// const Box = ({box, onRemove}) => {
//   const boxStyle = {
//     width: 200,
//     height: 200,
//     backgroundColor: "darkturquoise",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderStyle:"solid",
//     margin: 10
//   };
//
//   return <div style={boxStyle}>
//             {box.title}
//             <button style={{marginTop: 20}} onClick={()=>onRemove(box.id)}>Remove</button>
//         </div>;
// }

export default Box;
