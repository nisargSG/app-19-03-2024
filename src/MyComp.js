import { Component } from "react";


export default class MyComp extends Component{

  //phase 1

    constructor(props){
      console.log("THIS WAS CALLED constructor")

        super(props)
        this.state = {};
    }


    static getDerivedStateFromProps(props, state) {
      console.log("THIS WAS CALLED getDerivedStateFromProps")

      return {address: props.address };
    }

    render() {
      console.log("THIS WAS CALLED render")
        return (
          <div>
            <h1>My Favorite Color is {this.state.address}</h1>
            <button onClick={()=>{this.setState({age:40,name:"xyz"})}}>click me</button>
          </div>
        );
      }

      componentDidMount() {
        console.log("THIS WAS CALLED componentDidMount")
      }

      //phase 2

      shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true;
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate",prevProps,prevState)
        return prevProps
      }

      componentDidUpdate() {
        console.log("componentDidUpdate")
      }
     
      componentWillUnmount() {
        console.log("componentWillUnmount")
      }
}
