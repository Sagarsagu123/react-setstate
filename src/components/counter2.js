import React, { Component } from 'react'

 class counter2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count :0
        }
      }
      incrementCount=()=>{
          this.setState(prevState =>({ count:prevState.count+1}))
      }
  render() {
    return (
      <div>counter2</div>
    )
  }
}

export default counter2