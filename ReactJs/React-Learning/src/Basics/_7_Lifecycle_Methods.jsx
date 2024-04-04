import React, { Component } from 'react'
import LifeCycleB from './_7_Lifecycle_Methods2'

class LifeCycleA extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "Kajal"
        }
        constructor("Done Console.log to show the order of execution during mounting phase")
        console.log('LifeCycleA constructor')
    }
    static getDerivedFromProps(props, state){
        console.log('LifeCycleA getDerivedFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifeCycleA</div>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA