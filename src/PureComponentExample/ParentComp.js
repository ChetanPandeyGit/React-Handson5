import React, { Component } from 'react'
import ClassComponent from './ClassComponent'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
          fName: 'Chetan'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                fName : 'Chetan' 
            })                   
        },2000);        
    }
    render() {
        console.log('Parent Component Rendered!');
    return (
        <>
            <h4>Parent Component</h4>
            <span>open console and refresh for checking output</span>
            <PureComp name = {this.state.fName}/>
            <ClassComponent name = {this.state.fName}/>
        </>
    )
  }
}

export default ParentComp