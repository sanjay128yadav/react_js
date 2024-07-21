import React, {Component} from "react";

class ClassCounter extends Component{

    constructor() {
        super();
        this.state = {
            //data: "React Class  Component"
            data: 1
        }
    }

    demo() {
        
        this.setState({
            //data: "My First Class  Component"
            data: this.state.data +1
         })
        //alert(this.state.data);
    }

    render(){
        console.log(this.state.data);
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.demo()}>Click Me</button>
            </div>
        )
    }
}

export default ClassCounter