// Edit the code to make the printed text mirror what we type into the input field. 
// When we erase all of the text, nothing should be printed to the screen.
// Remember that the React component that renders the form also controls what happens in that
// on user input. 

//import React, { Component } from 'react';
//import './App.css';

//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <div className="container">
//          <input type="text" placeholder="Say Something" />
//          <p className="echo">Echo:</p>
//        <p>This should mirror the text you typed into the input field.</p>
//        </div>
//      </div>
//    );
//  }
// }

// export default App;

import React, { Component } from 'react';

class App extends Component {
   state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
 
  render() {
    return (
      <div className="container">
        <input 
           type="text"
           placeholder="Type here"
           value={this.state.value}
           onChange={this.handleChange}
         />
         <p className="echo">Echo:</p>
         <p>{this.state.value}</p>
      </div>
    );
  }
}

export default App;
