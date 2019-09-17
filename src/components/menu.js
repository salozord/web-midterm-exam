import React, { Component } from 'react';

class Menu extends Component {
    state = { 
        menu: this.props.menu 
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