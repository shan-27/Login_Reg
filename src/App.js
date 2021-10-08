import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginScreen from './components/screens/LoginScreen';
import RegScreen from './components/screens/RegScreen';

const App = () => {
  return (
    <Router>
      <div className="app">
        
        <RegScreen></RegScreen>
      </div>
    </Router>
  );
};

export default App;
