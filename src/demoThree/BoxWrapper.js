import React from "react";
import Box from "./Box";

// const BoxWrapper = ({ box, onRemove }) => (
//   <Box box={box} onRemove={onRemove} />
// )

class BoxWrapper extends React.Component {
  render = () => {
    const {box, onRemove} = this.props;
    return <Box box={box} onRemove={onRemove} />
  }
}

export default BoxWrapper;
