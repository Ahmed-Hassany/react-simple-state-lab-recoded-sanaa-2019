import React, { Component } from 'react';
class Cell extends Component {
  
    constructor(props) {
      super()
      this.state={
          color:this.props.value
      }
    }
    
    clickHandler = (c="#333") => {
      this.setState(
          {
              color:c
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