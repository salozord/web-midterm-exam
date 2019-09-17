import React, { Component } from 'react';
import TweetList from './tweetList';
import Menu from './menu';
import Search from './search';
import TrendList from './trendList';
import ToFollow from './toFollow';
import Footer from './footer';

class App extends Component {
    state = { 
        menu: [],
        tweets: [],
        trends: [],
        tofollow: []
    }
    componentDidMount () {
        fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json")
        .then(res => res.json())
        .then(body => {
            this.setState({
                menu: body.menu,
                tweets: body.tweets,
                trends: body.trends,
                tofollow: body.tofollow
            });
            console.log(body);
        });
    }
    render() { 
        return ( 
            <div className="">
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
                                    <Search />
                                </div>
                                <div className="col-12">
                                    <TrendList trends={this.state.trends} />
                                </div>
                                <div className="col-12">
                                    <ToFollow tofollow={this.state.tofollow} />
                                </div>
                                <div className="col-12">
                                    <Footer /> 
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