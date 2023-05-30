import './App.css';
import { OriginTextInput } from './components/OriginTextInput';
import { TranslatedTextInput } from './components/TranslatedTextInput';

function App() {
  return (
    <div className="App">
      <div className="app-header">
          Translated
      </div>
      <div className="app-content">
        <div className="origin-text">
          <OriginTextInput />
        </div>      
        <div className="translated-text">
          <TranslatedTextInput />
        </div>
      </div>
  
    </div>
  );
}

export default App;
