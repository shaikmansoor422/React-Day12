import React from "react";
import "./Otp.css"

class Otp extends React.Component {
    constructor() {
        super()
        this.state = {
            otp:"0",
            color: "grey"
        }
    }

    newOtp=()=>{
    let otpNum = Math.floor(Math.random() * 1000000)
        if (otpNum < 100000) {
            otpNum = otpNum + 100000
        }

    this.setState({otp :otpNum})
    this.setState({color :`#${otpNum}`})

}


    render() {
        return (
            <>
            <div id="body" style={{backgroundColor: this.state.color}}>
                <div id="heading">
                    <h2>Simple OTP Generator</h2>
                </div>
                <div id="otp_container">
                <div id="otp">{this.state.otp}</div>
                <div id="butt">
                    <button onClick={this.newOtp}>Generate OTP</button>
                </div>
            </div>
            </div>
            
            </>
        )
    }
}

export default Otp