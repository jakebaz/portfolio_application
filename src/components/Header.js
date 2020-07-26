import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <span>Email: jake.bazin@googlemail.com      Phone: 07971674809</span>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>My Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Header
