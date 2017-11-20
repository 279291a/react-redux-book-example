import React, { PropTypes } from 'react';
import ReactHighcharts from 'react-highcharts';

function Line(props) {
  if (!props.statistic) return <p>数据异常</p>;

  const { categories, series } = props.statistic.chart;
  const config = {
    credits: {
      enabled: false,
    },
    title: {
      title: 'Monthly Average Temperature',
      x: -20,
    },
    subtitle: {
      text: 'source worldClimate.com',
      x: -20,
    },
    xAxis: {
      categories,
    },
    yAxis: {
      title: {
        text: 'temperature(℃)',
      },
      ploLines: [{
        value: 0,
        width: 1,
        color: '#808080',
      }],
    },
    tooltip: {
      valueSuffix: '℃',
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0,
    },
    series,
  };

  return (
    <ReactHighcharts config={config} />
  );
}

Line.propTypes = {
  statistic: PropTypes.any,
};

export default Line;
