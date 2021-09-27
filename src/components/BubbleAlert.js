import { Component } from "react";

const styles = {
  bubbleAlert: {
    backgroundColor:'#E9725A',
    borderRadius: '50%',
    color:"#fff",
    padding: '4px 8px',
    fontSize:'0.9rem'
  }
}

class BubbleAlert extends Component {
  render() {
    return <span style={styles.bubbleAlert}>5</span>;
  }
}

export default BubbleAlert;
