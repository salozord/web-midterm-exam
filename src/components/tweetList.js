import React, { Component } from 'react';
import Tweet from './tweet';

class TweetList extends Component {
    state = { 
        tweets: this.props.tweets
     }
    render() { 
        return ( 
            <div className="overflow-auto">
                { this.state.tweets.map( (e, i) => <Tweet key={i} info={e} /> ) }
            </div>
         );
    }
}
 
export default TweetList;