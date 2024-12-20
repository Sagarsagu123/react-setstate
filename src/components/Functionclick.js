import React from 'react'

function Functionclick() {
    function ClickHandler(){
        console.log("Button Clicked")
    }

  return (
    <div>
        <button onClick={ ClickHandler}> click</button>
    </div>
  )
}

export default Functionclick