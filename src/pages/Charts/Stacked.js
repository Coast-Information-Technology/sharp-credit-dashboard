import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    StackingColumnSeries,
    Tooltip,
} from "@syncfusion/ej2-react-charts";

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy"

const Stacked = ({ width, height }) => {
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartComponent
            width={width}
            height={height}
            id="stack chart"
        // primaryXAxis={stackedPrimaryXAxis}
        // primaryYAxis={stackedPrimaryYAxis}
        // chartArea={{ border: { width: 0 } }}
        // toolTip={{ enable: true }}
        // legendSettings={{background: 'white'}} 
        >
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((data, index) => <SeriesDirective key={index} {...data} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    </div>
}

export default Stacked