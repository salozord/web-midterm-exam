import React, { Component } from 'react';
import TweetList from './tweetList';
import Menu from './menu';

class App extends Component {
    state = { 
        menu:[],
        tweets: [],
        trends: [],
        tofollow: []
    }
    async fetchContent() {
        const res = await fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json");
        return await res.json();
    }
    componentDidMount () {
        fetchContent()
        .then(body => {
            this.setState({
                menu: body.menu,
                tweets: body.tweets,
                trends: body.trends,
                tofollow: body.tofollow
            });
        });
    }
    render() { 
        return ( 
            <div className="w-100 h-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <Menu key="menu" menu={this.state.menu} />
                        </div>
                        <div className="col-6">
                            <TweetList key="tweetList" tweets={this.state.tweets} />
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-12">
                                    
                                </div>
                                <div className="col-12">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default App;