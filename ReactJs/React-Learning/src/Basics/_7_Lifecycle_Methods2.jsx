import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "Kajal"
        }
        constructor("Done Console.log to show the order of execution during mounting phase")
        console.log('LifeCycleB constructor')
    }
    static getDerivedFromProps(props, state){
        console.log('LifeCycleB getDerivedFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    render() {
        console.log('LifeCycleB render')
        return (
            <div>LifeCycleB</div>
        )
    }
}

export default LifeCycleB