import React, { Component } from 'react';
import Tweet from './tweet';

class TweetList extends Component {
    state = { 
        tweets: this.props.tweets
     }
     componentDidMount () {
        fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json")
        .then(res => res.json())
        .then(body => {
            this.setState({
                tweets: body.tweets,
            });
        });
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