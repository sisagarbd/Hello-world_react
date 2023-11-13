import React, { Component } from "react";



let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello  {props.name} and Your age: {props.age} </h1>
            <h4> {props.children}</h4>
            <hr></hr>
        </div>
    );
}

// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         //console.log(this.props);

//         return (
//             <div>
//                 <h1>Hello  {this.props.name} and Your age: {this.props.age} </h1>
//                 <h4> {this.props.children}</h4>
//                 <hr></hr>
//             </div>
//         );


//     }

// }

export default Person;