import React, { Component } from 'react';

class Sort extends Component {

  onClick = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={ () => this.onClick('name',1)}>
              <span 
                role="button" 
                className={this.props.sortBy === 'name' && this.props.sortValue === 1 ? 'sort_selected' : ''}
              >
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </span>
            </li>
            <li onClick={ () => this.onClick('name',-1)}>
              <span 
                role="button"
                className={this.props.sortBy === 'name' && this.props.sortValue === -1 ? 'sort_selected' : ''}
              >
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </span>
            </li>
            <li role="separator" className="divider" />
            <li onClick={ () => this.onClick('status',1)}>
              <span 
                role="button"
                className={this.props.sortBy === 'status' && this.props.sortValue === 1 ? 'sort_selected' : ''}
              >
                Trạng Thái Kích Hoạt
              </span>
            </li>
            <li onClick={ () => this.onClick('status',-1)}>
              <span 
                role="button"
                className={this.props.sortBy === 'status' && this.props.sortValue === -1 ? 'sort_selected' : ''}
                >
                Trạng Thái Ẩn
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
