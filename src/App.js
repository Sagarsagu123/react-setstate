import React, { Component } from "react";
import './App.css';
import './appStyles.css';
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";


class App extends Component {
  render() {
    return (
      <div className="App"> 

<UserProvider value="Shashi"><ComponentC/></UserProvider>


     
      {/* <h1 className='fff'> error </h1>
      <h1 className= {Styles.color}> colorrr</h1> */}
      {/* <RefsDemo/> */}
      {/* <EnhancedCounter /> */}
     
{/* <StyleSheet primary ={true}/>
<Inline /> */}







        {/* <UserGreeting />
        <NameList /> */}
        {/* <ParentComponent /> */}
        {/* <Counter /> */}
        {/* <Functionclick />
        <Classclick />
        <EventBlind /> */}

        {/* <Greet name="Shashi223eee" /> */}
        {/* {/* <Greet name="Shashi22" />
        <button>Action</button> */}
        {/* <Greet name="Shashi222wsws" />
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
