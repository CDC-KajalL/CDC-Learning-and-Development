import React, { Component } from 'react'
import LifeCycleB from './_7_Lifecycle_Methods2'
import Btn from './_1_Button'

class LifeCycleA extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "Kajal"
        }
        console.log("Showing Console.log to display the order of execution during mounting phase")
        console.log('LifeCycleA constructor')
    }
    static getDerivedFromProps(props, state){
        console.log('LifeCycleA getDerivedFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, nextProps){
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate")
    }
    changestate = ()=>{
        this.setState({
            name: "Hare Krishna"
        })
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifeCycleA</div>
                <Btn size="sm" type="secondary" onClick={() => this.changestate()}>Change State</Btn>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA