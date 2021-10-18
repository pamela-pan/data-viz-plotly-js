// import dependencies
import React, { Component } from 'react';
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
                            marker: {
                                size: population,
                                sizeref: 900000,
                                sizemode:'area'
                            },
                            transforms: [{
                                type: "groupby",
                                groups: continents
                            }],
                            hovertemplate:
                            "<b>%{text}</b><br>" +
                            "%{yaxis.title.text}: %{y}<br>" +
                            "%{xaxis.title.text}: %{x}<br>" +
                            "Population: %{marker.size}<br>"
                        },
                    ]}
                    layout = { {
                        xaxis: {
                            tickangle: -45,
                            title:"GDP (in USD)",
                            type:'log',
                            range: [8,14]
                            // since we're using logarithmic x-axis,
                            // range is gotten from [log(min),log(max)]
                            // where min = 10000000, max = 30000000000000
                            // autorange: true
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