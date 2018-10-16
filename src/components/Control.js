import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  render() {
    return (
      <React.Fragment>
        <Search onSearch={this.props.onSearch}/>
        <Sort />
      </React.Fragment>
    );
  }
}

export default Control;
