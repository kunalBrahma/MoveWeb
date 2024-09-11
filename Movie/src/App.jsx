import "./App.css";
import Banner from "./components/Banner";
import Movie from "./components/Movie";
import Navbar from "./components/navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movie />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// https://api.themoviedb.org/3/movie/popular?api_key=615839766e30cfbd49d4a78a7251346e&language=en-US&page=1

export default App;
