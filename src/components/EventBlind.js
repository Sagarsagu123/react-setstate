import React, { Component } from 'react'

 class EventBlind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "hello brother"

      }
      this.clickHandler=this.clickHandler.bind(this)

    }
    clickHandler(){
        this.setState({
            message : "Goodbye brother"
      
        })
    }
  render() {
    return (
      <div>
        <div> {this.state.message}</div>
         {/* <button onClick={this.clickHandler.bind(this)}> touch me </button > */}

       
           {/* <button onClick={()=>this.clickHandler()}>
        touch me
        </button > */}
<button onClick={this.clickHandler}> touch me </button >
        </div>
    )  
  }
}

export default EventBlind