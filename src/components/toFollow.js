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
                    <img src={e.avatar} alt={e.avatar} className="rounded-circle" />
                    { e.first_name } {e.last_name}
                    <span> @{ e.nick } . { e.date }</span>
                </div>
                <div>
                    <button onClick={this.seguir}> Seguir </button>
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