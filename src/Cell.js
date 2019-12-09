import React, { Component } from 'react';
class Cell extends Component {
  
    constructor(props) {
      super()
      this.state={
          color:props.value
      }
    }
    
    clickHandler = () => {
      this.setState(
          {
              color:"#333"
          }
      )
    }
    
    render() {
      return (
          <div className="cell" style={{backgroundColor: this.state.value}} onClick={this.clickHandler}>
          </div>
      )
    }
    
  }

  export default Cell