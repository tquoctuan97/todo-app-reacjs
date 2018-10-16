import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  render() {
    return (
      <React.Fragment>
        <Search onSearch={this.props.onSearch}/>
        <Sort 
          onSort={this.props.onSort}
          sortBy={this.props.sortBy}
          sortValue={this.props.sortValue}
          />
      </React.Fragment>
    );
  }
}

export default Control;
