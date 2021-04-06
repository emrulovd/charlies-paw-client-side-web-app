// import React from 'react';
import {
    StockChart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartNavigator,
    ChartNavigatorSelect,
    ChartNavigatorSeries,
    ChartNavigatorSeriesItem
} from '@progress/kendo-react-charts';
import 'hammerjs';
import stockData from './stock-data.json';

import classes from './AdminChart.module.css';


const adminChart = () => {
    const from = new Date('2009/02/05');
    const to = new Date('2011/10/07');
    return(
        <div className={classes.Container}>
  <StockChart>
    <ChartTitle text="The Boeing Company NYSE:BA" />
    <ChartSeries>
      <ChartSeriesItem
        data={stockData}
        type="candlestick"
        openField="Open"
        closeField="Close"
        lowField="Low"
        highField="High"
        categoryField="Date"
            />
    </ChartSeries>
    <ChartNavigator>
      <ChartNavigatorSelect from={from} to={to} />
      <ChartNavigatorSeries>
        <ChartNavigatorSeriesItem
          data={stockData}
          type="area"
          field="Close"
          categoryField="Date"
                />
      </ChartNavigatorSeries>
    </ChartNavigator>
  </StockChart>
        </div>
    )
}


// export default adminChart;


// import * as React from 'react';

// import {
//     Chart,
//     ChartTitle,
//     ChartSeries,
//     ChartSeriesItem,
//     ChartCategoryAxis,
//     ChartCategoryAxisItem
//   } from '@progress/kendo-react-charts';
  
//   import 'hammerjs';
  
//   const categories = ['Jan', 'Feb', 'Mar', 'Apr'];
//   let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
//   return `${props.dataItem.category} years old: ${formatedNumber}`;};
  
//   const adminChart = () => (
//       <div>
//       <Chart>
//             <ChartTitle text="Units sold" />
//             <ChartCategoryAxis>
//             <ChartCategoryAxisItem title={{ text: 'Months' }} categories={categories} />
//             </ChartCategoryAxis>
//             <ChartSeries>
//             {/* <ChartSeriesItem type="line" data={[123, 276, 310, 212, 240, 156, 98]} /> */}
//             {/* <ChartSeriesItem type="line" data={[165, 210, 287, 144, 190, 167, 212]} /> */}
//             <ChartSeriesItem type="line" data={[56, 140, 195, 46, 123, 78, 95]} />
//             </ChartSeries>
//   </Chart>


//   <Chart title="World Population by Broad Age Groups">
//     <ChartLegend position="bottom" />
//     <ChartSeries>
//       <ChartSeriesItem type="pie" data={series} field="value" categoryField="category" labels={{ visible: true, content: labelContent }} />
//     </ChartSeries>
//   </Chart>
//   </div>
//   );

export default adminChart;