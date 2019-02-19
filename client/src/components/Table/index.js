import ReactTable from "react-table";
import 'react-table/react-table.css'

import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    const { data, columns } = this.props;

    return(

     <ReactTable
    data={data}
    columns={columns}
    noDataText='لايوجد بيانات'
  />
)
}
}

export default Table;
