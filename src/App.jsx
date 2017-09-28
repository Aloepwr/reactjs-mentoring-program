import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderFilter from "./components/HeaderFilter";
import MovieCard from "./components/MovieCard";
import MovieDescription from "./components/MovieDescription";


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="app">
        <Header />
        <HeaderFilter />
        
        <Switch>
          <Route exact path="/" component={MovieCard} />
          <Route path="/search/:searchQuery" component={MovieCard} />
          <Route path="/film/:searchQuery" component={MovieDescription} />
        </Switch>
        
        <Footer />
      </div>
    );
  }
};

export default App;