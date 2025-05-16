import React from "react";

class App extends React.Component{

constructor(){
  super()
  let num = Math.floor(Math.random()*1000000)
    if(num < 100000){
      num = num + 100000
    }

    this.state ={
      otp : num
    }
}



  render(){
    console.log(this.state.otp)

    return(
      <>
      </>
    )
  }
}
export default App