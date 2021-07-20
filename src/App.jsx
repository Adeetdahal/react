import React, { Component } from 'react';
// import './App.css';

const one = 'adeet';
const two = 'rozeel';
const three = 'vikrant';
const style = {
    fontSize: '30px',
    color: 'blue',
};
//normal Function
export function HelloNormal({ login, logout }) {
    return (
        <div className="test">
            Hello {three}
            <br />
            <div style={{ color: 'blueviolet' }}> {login ? <div>Logged In</div> : <div>Not lOgged In</div>} </div>
            <br />
            <div style={{ color: 'blueviolet' }}> {logout ? <div>logout out</div> : <div>still logged in</div>} </div>
            <br />
        </div>
    );
}

//arrow function
export const Hello = ({ nested }) => {
    return (
        <div id="1">
            Hello Arrow
            <br />
            {one} {two}
            {nested ? <div>yes</div> : <div>no</div>}
            <HelloNormal />
        </div>
    );
};

//class based component
export class App extends Component {
    render() {
        return (
            <div style={style}>
                <HelloNormal login logout={false} />
                <Hello nested />
                Added class
            </div>
        );
    }
}

//!component configuration
//!component reusability
//!component nesting
export default App;
