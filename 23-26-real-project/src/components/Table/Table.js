import React, { PropTypes } from 'react';
import Griddle from 'griddle-react';
import CustomPagerComponent from './CustomPagerComponent';
require('./Table.scss');

const customComponent = props => (<div>{`${props.data}℃`}</div>);

customComponent.propTypes = {
  data: PropTypes.number.isRequired,
};

function Table(props) {
  if (!props.statistics) return <p>数据异常</p>;

  const columnMetadata = [
    {
      columnName: 'Month',
    },
    {
      columnName: 'Tokyo',
      customComponent,
    },
    {
      columnName: 'New York',
      customComponent,
    },
    {
      columnName: 'Berlin',
      customComponent,
    },
    {
      columnName: 'London',
      customComponent,
    },
  ];

  return (
    <Griddle
      tableClassName="table table-striped"
      useGridStyles={false}
      results={props.statistics.table}
      columnMetadata={columnMetadata}
      useCustomePagerComponent
      customPagerComponent={CustomPagerComponent}
      resultsPerPage={5}
    />
  );
}

Table.propTypes = {
  statistics: PropTypes.any,
};

export default Table;
