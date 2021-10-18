import './App.css';
import BarChart from './components/BarChart'
import BubbleChart from './components/BubbleChart'

function App() {
  return (
    <div className="App">
      <div className = 'Graphs'>
      <h1>Tokyo Olympics 2020</h1>
        <BarChart />
        <BubbleChart />
        </div>
    </div>
  );
}

export default App;
