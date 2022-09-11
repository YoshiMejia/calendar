import './App.css';
import MonthView from './containers/MonthView';
import Events from './containers/Events';
import RightArrow from './components/arrows/RightArrow';
import LeftArrow from './components/arrows/LeftArrow';

function App() {
  return (
    <div className="App">
      <LeftArrow/>
      <MonthView/>
      <RightArrow/>
      <Events />
    </div>
  );
}

export default App;
