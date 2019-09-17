import React, { Component } from 'react';

class ToFollow extends Component {
    state = { 
        tofollow: this.props.tofollow
    }
    createToFollow = (e) => {
        return (
            <div key={e.hashtag}>
                <h5>#{e.hashtag}</h5>
                <div>
                    {e.teweets} teweets
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