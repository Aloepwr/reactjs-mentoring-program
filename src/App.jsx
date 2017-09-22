import { Switch, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderFilter from "./components/HeaderFilter";
import MovieCard from "./components/MovieCard";
import MovieDescription from "./components/MovieDescription";


export const App = () => (
  <div className="app">
    <Header />
    <HeaderFilter />
    <MovieCard />
    <MovieDescription />
    <Footer />
  </div>
);