import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeaderFilter } from "./components/HeaderFilter"
import { MovieCard } from "./components/MovieCard"


export const App = () => (
  <div className="app">
    <Header />
    <HeaderFilter />
    <MovieCard />
    <Footer />
  </div>
)