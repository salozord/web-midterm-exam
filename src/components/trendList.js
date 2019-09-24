import React, { Component } from 'react';

class TrendList extends Component {
    state = { 
        trends: this.props.trends
    }
    componentDidMount () {
        fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json")
        .then(res => res.json())
        .then(body => {
            this.setState({
                trends: body.trends,
            });
        });
    }
    createTrend = (e) => {
        return (
            <li key={e.hashtag}>
                <h5>#{e.hashtag}</h5>
                <div>
                    {e.teweets} teweets
                </div>
            </li>
        );
    }
    render() { 
        return ( 
            <ul>
                { this.state.trends.map( (e) => this.createTrend(e) ) }
            </ul>
         );
    }
}
 
export default TrendList;