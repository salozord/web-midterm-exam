import React, { Component } from 'react';

class ToFollow extends Component {
    state = { 
        tofollow: this.props.tofollow
    }
    componentDidMount () {
        fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json")
        .then(res => res.json())
        .then(body => {
            this.setState({
                tofollow: body.tofollow,
            });
        });
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