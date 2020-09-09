import React from 'react';
import Home from './pages/Home';
import SearchPage from "./SearchPage";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
         
      <Route path="/search">                   {/*Home (the one with search on)*/ }
        <SearchPage />
      </Route> 



      <Route path="/">                   {/*Home (the one with search on)*/ }
         <Home />
      </Route> 
                             {/* Search_page(The result page) */}
          
      </Switch>
      </Router>
    </div>
  );
}

export default App;
