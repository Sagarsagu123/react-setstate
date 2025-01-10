import { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggesIn:true
      }
    }

  render() {
    // if (this.state.isLoggesIn){
    //     return (
    //         <div>
    //             Welcome Sagar
    //         </div>
    //     )
    // }else{
    //     <div>
    //     GoodBye Sagar
    // </div>
    // }
         
    // return this.state.isLoggesIn 
    // ? (<div> Welcome Sagar</div>)
    // :(<div> GoodBye </div>)
    let Message;
    if (this.state.isLoggesIn){
            Message=
                <div>
                    Welcome Sagar
                </div>
    
    }else{
        
     Message=
    <div>
        GoodBye Sagar
    </div>
    }


    return <div> {Message}</div>
    // return (
    //   <div>UserGreeting</div>
    // )
  }
}

export default UserGreeting