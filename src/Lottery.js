import React, {Component} from 'react';
import Ball from './Ball.js'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: '',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props){
        super(props);
        this.state = {nums: Array.from({length: this.props.numBalls }) };
        this.handleClick = this.handleClick.bind(this);
    }

    generate(){
        this.setState(curState => ({
            nums: curState.nums.map(
            n => Math.floor(Math.random() * this.props.maxNum) +1
            )
        }));

    }
// this function only calls generate. its common practice to call a funciton form the button that only renders the fucntion with all the logic.
    handleClick(){
        this.generate();
    }

    render(){
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n}/>)}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery;