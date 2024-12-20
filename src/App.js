import React, { Component } from "react";
import './App.css';
import Classclick from "./components/Classclick";
import EventBlind from "./components/EventBlind";
import Functionclick from "./components/Functionclick";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <Functionclick />
        <Classclick />
        <EventBlind />

        {/* <Greet name="Shashi223eee" /> */}
        {/* <Greet name="Shashi22" />
        <button>Action</button>
        <Greet name="Shashi222wsws" />
        <Greet name="Shashi2e" />
        <Welcome name="Shashi2wwdsx2" />
        <Welcome name="Shasszahiwazasw22" /> */}
        {/* <Welcome name="Shashiqasqas22" /> */}
        {/* Uncomment this if the Hello component is defined */}
        {/* <Hello /> */}
        {/* <Message /> */}
      </div>
    );
  }
}

export default App;
