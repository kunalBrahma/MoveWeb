import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movie({ handleWatchlist, handleRemoveFromWatchList, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=615839766e30cfbd49d4a78a7251346e&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching the movies:", error);
      });
  }, [pageNo]);

  // Validate handleWatchlist
  const isValidFunction = (func) => typeof func === "function";

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              title={movieObj.title}
              poster_path={movieObj.poster_path}
              overview={movieObj.overview}
              handleWatchlist={
                isValidFunction(handleWatchlist) ? handleWatchlist : () => {}
              }
              movieObj={movieObj}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}

Movie.propTypes = {
  handleWatchlist: PropTypes.func.isRequired,
};

export default Movie;
