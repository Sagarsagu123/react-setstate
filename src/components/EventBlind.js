import React, { Component } from 'react'

 class EventBlind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "hello brother"
      }

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
         {/* <button onClick={this.clickHandler.bind}>
        touch me
        </button > */}
           <button onClick={()=>this.clickHandler()}>
        touch me
        </button >
        </div>
    )
  }
}

export default EventBlind