import React, { Component } from 'react';

class Tweet extends Component {
    state = { 
        avatar: this.props.info.avatar,
        first_name: this.props.info.first_name,
        last_name: this.props.info.last_name,
        nick: this.props.info.nick,
        date: this.props.info.date,
        content: this.props.info.content,
        retweets: this.props.info.retweets,
        favs: this.props.info.favs
    }
    handleFav = (e) => {
        e.preventDefault();
        this.setState({
            favs: this.state.favs + 1
        });
    }
    handleRetweet = (e) => {
        e.preventDefault();
        this.setState({
            retweets: this.state.retweets + 1
        });
    }
    render() { 
        return (
            <div className="card">
                <div className="card-title">
                    <img src={this.state.avatar} alt={this.state.avatar} className="rounded-circle" />
                    { this.state.first_name } {this.state.last_name}
                    <span> @{ this.state.nick } . { this.state.date }</span>
                </div>
                <div className="card-body">
                    <p>
                        { this.state.content }
                    </p>
                    <hr />
                    <button className="btn btn-primary" onClick={this.handleFav}>{ this.state.favs } Fav</button>
                    <button className="btn btn-primary" onClick={this.handleRetweet}>{ this.state.retweets } Retweet</button>
                </div>
            </div>
        );
    }
}
 
export default Tweet;