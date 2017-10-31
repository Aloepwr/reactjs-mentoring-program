import React from "react";
import { Switch, Route } from "react-router-dom";

import MoviesListResultContainer from './containers/MoviesListResultContainer';
import FullMovieDescriptionContainer from './containers/FullMovieDescriptionContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={ MoviesListResultContainer } />
          <Route path="/search" component={ MoviesListResultContainer } />
          <Route path="/search/:searchQuery" component={ MoviesListResultContainer } />
          <Route path="/:type/:filmId" component={ FullMovieDescriptionContainer } />
        </Switch>
      </div>
    );
  }
}

export default App;

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import MovieCard from "./components/MovieCard";
// import MovieCardDescription from "./components/MovieCardDescription";

{/*     <Header />
        <HeaderFilter />
        
        <Switch>
          <Route exact path="/" component={MovieCard} />
          <Route path="/search/:searchQuery" component={MovieCard} />
          <Route path="/film/:searchQuery" component={MovieCardDescription} />
        </Switch>
        
        <Footer /> */}