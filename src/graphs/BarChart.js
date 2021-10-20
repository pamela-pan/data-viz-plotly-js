// import dependencies
// because we are using ES7, we don't need to import React when we write in JSX
// However, we do want a shortcut for "Component", so let's import that
import { Component } from 'react';
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
                        },
                    ]}
                    layout = { {
                        xaxis: {
                            tickangle: -45,
                            title:"Country"
                          },
                        yaxis: {
                            title: "Number of Gold Medals"
                        },
                        title: 'Medals of Top 5 Countries by Ranking',
                    } }
                />
            </div>
        )
    }
}
export default BarChart;