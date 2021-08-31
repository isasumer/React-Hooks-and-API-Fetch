import React from "react";

class ClassComponents extends React.Component {
    // constructor (){
    //     super();
    //     this.state = {
    //         counter:0
    //     }
    //     this.increase = this.increase.bind(this);
    // };
    state = {
        counter:0
    };
    componentDidMount(){
        console.log('ComponentDidMount :>> ');
    }
    componentDidUpdate(){
        console.log('ComponentDidUpdate :>> ',  this.state.counter);
    }

increase =() => {
   this.setState({counter: this.state.counter+1})
}

    render(){
        return (
            <div className="class">
                <h2>Class Component</h2>
                <p>Counter: {this.state.counter}</p>
                <button onClick= {() => this.increase()}>increase</button>
            </div>
        )
    }
}

export default ClassComponents;