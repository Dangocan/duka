import React from 'react';
import ReactApexChart from 'react-apexcharts'

import './styles.css';

class ApexChart extends React.Component {
    constructor(props:any) {
      super(props);

      this.state = {
      
        series: [{
            name: "Olheiros",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: '',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'],
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
      };
    }

    render() {
      return (
        <>
          <div id="chart">
            <ReactApexChart options={this.state.options as any} series={this.state.series} type="line" height={350} />
          </div>
        </>
      )
        
    }
}

export default ApexChart;