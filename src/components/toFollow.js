import React, { Component } from 'react';

class ToFollow extends Component {
    state = { 
        tofollow: this.props.tofollow
    }
    seguir = (e) => {
        e.preventDefault();
    }
    createToFollow = (e) => {
        return (
            <div key={e.nick}>
                <div>
                    <img src={this.state.avatar} alt={this.state.avatar} className="rounded-circle" />
                    { this.state.first_name } {this.state.last_name}
                    <span> @{ this.state.nick } . { this.state.date }</span>
                </div>
                <div>
                    <button onClick={}> Seguir </button>
                </div>
            </div>
        );
    }
    render() { 
        return ( 
            <div>
                { this.state.tofollow.map((e) =>  this.createToFollow(e) ) }
            </div>
        );
    }
}
 
export default ToFollow;