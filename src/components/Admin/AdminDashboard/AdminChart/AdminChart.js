import React from 'react';
import CanvasJSReact from "./canvasjs.react";
import classes from './AdminChart.module.css';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const adminCharts = () => {

    const options = {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Dogs Adpoted - March 2021"
        },
        axisX:{
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            valueFormatString: "0",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return CanvasJS.formatNumber(e.value, "##0");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM",
            yValueFormatString: "##0",
            dataPoints: [
              { x: new Date("2018-03-01"), y: 2},
              { x: new Date("2018-03-02"), y: 5},
              { x: new Date("2018-03-05"), y: 1},
              { x: new Date("2018-03-06"), y: 8},
              { x: new Date("2018-03-07"), y: 7},
              { x: new Date("2018-03-08"), y: 10},
              { x: new Date("2018-03-09"), y: 13},
              { x: new Date("2018-03-12"), y: 9},
              { x: new Date("2018-03-13"), y: 14},
              { x: new Date("2018-03-14"), y: 17},
              { x: new Date("2018-03-15"), y: 13},
              { x: new Date("2018-03-16"), y: 15},
              { x: new Date("2018-03-19"), y: 16},
              { x: new Date("2018-03-20"), y: 21},
              { x: new Date("2018-03-21"), y: 19},
              { x: new Date("2018-03-22"), y: 23},
              { x: new Date("2018-03-23"), y: 24},
              { x: new Date("2018-03-25"), y: 26},
              { x: new Date("2018-03-27"), y: 25},
              { x: new Date("2018-03-29"), y: 28},
            ]
        }]
    }

    return(
        <div className={classes.Container}>
			<CanvasJSChart options = {options} />
        </div>
    )
}

export default adminCharts;