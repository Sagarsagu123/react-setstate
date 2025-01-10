import React, { Component } from 'react'
 class HowerCounter extends Component {

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
      <div>HowerCounter</div>
    )
  }
}

export default HowerCounter