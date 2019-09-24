import React, { Component } from 'react';

class Menu extends Component {
    state = { 
        menu: this.props.menu 
    }
    componentDidMount () {
        fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json")
        .then(res => res.json())
        .then(body => {
            this.setState({
                menu: body.menu,
            });
        });
    }
    render() { 
        return ( 
            <ul>
                { this.state.menu.map( e => <li key={ e.text }><img src={e.image} alt={e.text}/>  { e.text }</li> ) }
            </ul>
         );
    }
}
 
export default Menu;