import React, { Component } from "react";
import { TweenMax } from "gsap";
import ConstantStyles from "../constantStyles";

//stateless component
// const Box = ({ box, onRemove }) => {
//   const boxStyle = {
//     width: 300,
//     height: 300,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderStyle: "solid",
//     margin: 10,
//     backgroundColor: "darkturquoise"
//   };
//
//   return (
//     <div style={boxStyle}>
//       {box.title}
//       <button style={{ marginTop: 20 }} onClick={() => onRemove(box.id)}>
//         Remove
//       </button>
//     </div>
//   );
// };

const boxStyle = {
  width: 300,
  height: 300,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  borderStyle: "solid",
  margin: 10,
  backgroundColor: "darkturquoise"
};

class Box extends Component {
  state = {isExpanded: false}

  componentDidUpdate = () => {
    if(this.state.isExpanded){
        TweenMax.to(this.refs.boxNode, ConstantStyles.TWEENMAX_DURATION, {width: 500, height: 500});
    }else{
        TweenMax.to(this.refs.boxNode, ConstantStyles.TWEENMAX_DURATION, {width: 300, height: 300});
    }
  }

  _onHandleClick = () => {
    const {isExpanded} = this.state;
    this.setState({isExpanded: !isExpanded})
  }

  _onHandleRemove = (event,id) => {
    this.props.onRemove(id);
    event.stopPropagation();
  }

  render = () => {
    const { box } = this.props;
    return (
      <div style={boxStyle} onClick={this._onHandleClick} ref="boxNode">
        {box.title}
        <button style={{ marginTop: 20 }} onClick={(event)=>this._onHandleRemove(event,box.id)}>
          Remove
        </button>
      </div>
    );
  };
}

export default Box;
