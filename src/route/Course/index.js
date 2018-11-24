import React from 'react';
import Header from '../../components/Header/index';
export default class Courese extends React.Component {
    
    render () {
        return (
            <div>
                <Header />
                <ul>
                    <li>语文</li>
                    <li>英语</li>
                    <li>数学</li>
                    <li>历史</li>
                    <li>地理</li>
                </ul>
            </div>
        )
    }
}