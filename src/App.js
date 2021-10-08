import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginScreen from './components/screens/LoginScreen';

const App = () => {
  return (
    <Router>
      <div className="app">
        <LoginScreen/>
      </div>
    </Router>
  );
};

export default App;
