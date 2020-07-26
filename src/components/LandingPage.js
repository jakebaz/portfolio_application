import React, { Component } from 'react'

export class LandingPage extends Component {
    render() {
        return (
            <div className="landing">
                <p>Hi! My name is <span id="name-tag">Jacob Bazin</span> and I am a <span id="role-tag">Full Stack Developer</span></p>
            </div>
        )
    }
}

export default LandingPage
