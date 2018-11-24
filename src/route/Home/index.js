import React from 'react';
import Header from '../../components/Header/index.js';
export default class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            num: 1
        }
    }

    componentDidMount () {
        setInterval ( () => {
            this.setState({
                num: this.state.num + 1
            })
        },1000)
    }

    render () {
        return (
            <div>
                <Header />
                {this.state.num}
            </div>
        )
    }
}