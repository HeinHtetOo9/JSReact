import React from "react";
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter : 1
        }
        console.log("constructor");
    }
    componentDidMount() {
        console.log("Component Did Mount");
    }
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    incCount(){
        // this.setState({
        //         counter: this.state.counter + 1
        //
        //     });
        // this.setState({
        //         counter: this.state.counter + 1
        //
        //     },()=>{
        //     console.log("Counter",this.state.counter);
        // });
        this.setState((state,props)=>({
            counter : state.counter + props.inc
        })
        )
        this.setState((state,props)=>({
                counter : state.counter + props.inc
            })
        )
    }
    render(){
        console.log("Counter Render")
        return(
        <div>
            <h2>Counter {this.state.counter}</h2>
            <button type={"button"}
                    onClick={this.incCount.bind(this)}>+</button>
        </div>
    )
    }
}
export default Counter;