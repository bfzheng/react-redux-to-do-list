import React from "react";
import ReactSvgPieChart from 'react-svg-piechart'

class PieChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.data = [
            {title: "Data 1", value: 100, color: "#22594e"},
            {title: "Data 2", value: 60, color: "#2f7d6d"},
            {title: "Data 3", value: 30, color: "#3da18d"},
            {title: "Data 4", value: 20, color: "#69c2b0"},
            {title: "Data 5", value: 10, color: "#a1d9ce"}
        ];
    }

    render() {
        return (
            <ReactSvgPieChart data={this.data} viewBoxSize={0.05} expandOnHover expandSize={0.005} strokeWidth={0} onSectorHover={(d, i, e) => {
                if (d) {
                    console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                } else {
                    console.log("Mouse leave - Index:", i, "Event:", e)
                }
            }}/>
        )
    }
}

export default PieChartComponent;