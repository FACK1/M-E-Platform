import ReactTable from "react-table";
import 'react-table/react-table.css'

import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    }

    renderColumns() {
      console.log("col",this.props.columns);
      console.log("data",this.props.data);

      }



  render() {
    // const data=[{
    //   name: 'Tanner امان'
    // }]

    return(
      <div>
      {this.renderColumns()}
     <ReactTable
    data={this.props.data}
    columns={this.props.columns}
  />
  </div>
)
}
}

export default Table;
