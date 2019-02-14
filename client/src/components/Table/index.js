import ReactTable from "react-table";
import 'react-table/react-table.css'

import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    }

  render() {

    return(

     <ReactTable
    data={this.props.data}
    columns={this.props.columns}
  />
)
}
}

export default Table;
