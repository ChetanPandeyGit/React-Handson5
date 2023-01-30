import React, { Component } from 'react'

class ClassComponent extends Component {    
    render() {      
        console.log('Class Component Rendered!');
    return (
        <h4>Class Component { this.props.name }</h4>
    )
  }
}

export default ClassComponent