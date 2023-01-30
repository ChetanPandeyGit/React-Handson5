import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() { 
    console.log('Pure Component Rendered!');
    return (<>
      <h4>Pure Component { this.props.name }</h4>
      </>
    )
  }
}

export default PureComp