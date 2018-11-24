import React from 'react';
import Header from '../../components/Header/index';
export default class News extends React.Component {
    
    render () {
        return (
            <div>
                <Header />
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                    <li>five</li>
                </ul>
            </div>
        )
    }
}