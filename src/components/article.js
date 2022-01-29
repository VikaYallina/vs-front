import React from 'react'
import { Component } from 'react';
import articles from './articles';

class Article extends Component{
    constructor(props) {
        super(props);
        this.state = { isShow: false }
        this.art = props.art;
        this.handleButtonClick = this.handleClick.bind(this)
      };

    handleClick(){
        const p = !this.state.isShow;
        this.setState( {isShow: p} )
    }

    render() {
        return (
            <div>
                <li>
        <div>{this.art.id}</div>
        <div>{this.art.date}</div>
        <div>{this.art.title}</div>
        {this.state.isShow ? 
        <div>{this.art.text}</div>:null}
        <div>{this.art.comments}</div>
        <div><button onClick={this.handleButtonClick}>Click</button></div>
    </li>                
            </div>
        )
    }
};
export default Article;