import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavigationHeader extends Component {
    render() {
        return (
            <header>
                <div id="header-inner">
                    <Link to='/' id='logo'></Link>
                    <nav>
                        <a href="#" if="menu-icon"></a>
                        <ul>
                            <li><a href="#" className="current">Home</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}