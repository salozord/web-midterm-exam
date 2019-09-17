import React, { Component } from 'react';

class Search extends Component {
    state = { search: "" }
    render() { 
        return ( 
            <input type="search" id="search" placeholder="Bucar en Twitter" className="form-control rounded-pill" onChange={(evt) => this.setState({search: evt.target.value})} />
         );
    }
}
 
export default Search;