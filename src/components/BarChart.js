// import dependencies
import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import { teams, golds, silvers, bronzes } from '../data/medals';

class BarChart extends Component {

    render() {

        return (
            <div>
                <Plot
                    data={[
                        {type: 'bar',
                            x: teams,
                            y: golds,
                            name: 'Gold',
                            marker: {
                                color: "#FFD700",
                            }},
                        {type: 'bar',
                            x: teams,
                            y: silvers,
                            name: 'Silver',
                            marker: {
                                color: "silver",
                            }},
                        {type: 'bar',
                            x: teams,
                            y: bronzes,
                            name: 'Bronze',
                            marker: {
                                color: "#C3792F",
                            }},
                    ]}
                    layout = { {
                        xaxis: {
                            tickangle: -45,
                            title:"Country"
                          },
                        yaxis: {
                            title: "Number of Medals"
                        },
                        title: 'Medals of Top 5 Countries by Ranking',
                        barmode: 'stack'} }
                />
            </div>
        )
    }
}
export default BarChart;