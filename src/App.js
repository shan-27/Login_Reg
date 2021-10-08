import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginScreen from './components/screens/LoginScreen';
import RegScreen from './components/screens/RegScreen';
import ForgotPassword from './components/screens/ForgotPassword';
import ResetPassword from './components/screens/ResetPassword';

const App = () => {
  return (
    <Router>
      <div className="app">
        
        
        
        <ResetPassword/>
        
      </div>
    </Router>
  );
};

export default App;
