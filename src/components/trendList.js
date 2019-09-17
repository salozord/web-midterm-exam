import React, { Component } from 'react';

class TrendList extends Component {
    state = { 
        trends: this.props.trends
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