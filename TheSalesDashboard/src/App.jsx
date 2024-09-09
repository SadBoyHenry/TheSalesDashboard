import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Heading from './components/Heading';
import TransactionBar from './components/TransactionBar';

function App() {
  return (
    <Router>
      <div>
        <Heading />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/transactions" component={TransactionBar} />
            // Add other routes here
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;