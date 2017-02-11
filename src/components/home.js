import React, { Component } from 'react';
import NavigationHeader from './navigation-header';
import Banner from './banner';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavigationHeader />
                <Banner />
            </div>
        );
    }
}