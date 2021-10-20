import './App.css';
import BarChart from './graphs/BarChart'
import BubbleChart from './graphs/BubbleChart'

function App() {
  return (
    <div className="App">
      <h1>Tokyo Olympics 2020</h1>
        <BarChart />
        <BubbleChart />
    </div>
  );
}

export default App;