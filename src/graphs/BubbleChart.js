// import dependencies
import { Component } from 'react';
import Plot from 'react-plotly.js';
import {teamsAll, totalMedals, gdp, population, continents} from "../data/medalsAllCountries"

class BubbleChart extends Component {

    render() {

        return (
            <div>
                <Plot
                    data={[
                        {   mode:"markers",
                            type: 'scatter',
                            x: gdp,
                            y: totalMedals,
                            text: teamsAll,
                            hovertemplate:
                            "<b>%{text}</b><br>"
                            + "%{yaxis.title.text}: %{y}<br>"
                            + "%{xaxis.title.text}: %{x}<br>" 
                        },
                    ]}
                    layout = {{
                        xaxis: {
                            tickangle: -45,
                            title:"GDP (in USD)",
                            // try log-scaling the x-axis
                            // since we're using logarithmic x-axis,
                            // range is gotten from [log(min),log(max)]
                            // where in this dataset, 
                            // min = 10,000,000, max = 30,000,000,000,000
                          },
                        yaxis: {
                            title:"Total Medals"
                        },
                        title: 'Medals of All Countries by GDP'} }
                />

            </div>
        )
    }
}
export default BubbleChart;