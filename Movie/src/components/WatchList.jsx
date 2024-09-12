import { useEffect, useState } from "react";
import genres from "../assets/utility/genres";

const WatchList = ({ watchlist, setWatchlist, handleRemoveFromWatchList }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };

  let sortPopularityInc = () => {
    let sortedIncPop = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchlist([...sortedIncPop]);
  };

  let sortPopularityDesc = () => {
    let sortedDescPop = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchlist([...sortedDescPop]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => genres[movieObj.genre_ids[0]]);
    temp = [...new Set(temp)]; // Remove duplicates
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 pt-4 pb-4 gap-5">
        {genreList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currentGenre === genre
                  ? "flex justify-center items-center p-5 w-auto h-[3rem] bg-blue-400 rounded-xl text-xl font-bold text-white mx-4 hover:cursor-pointer"
                  : "flex justify-center items-center p-5 w-auto h-[3rem] bg-gray-400 rounded-xl text-xl font-bold text-white mx-4 hover:cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          className="w-[18rem] h-[2.5rem] bg-gray-200 outline-none px-4"
          type="text"
          placeholder="Search for Movie"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex justify-center items-center">
                  <span className="mr-2">Ratings</span>
                  <div className="flex flex-col">
                    <div className="p-1" onClick={sortIncreasing}>
                      <i className="fa-solid fa-arrow-up"></i>
                    </div>
                    <div className="p-1" onClick={sortDecreasing}>
                      <i className="fa-solid fa-arrow-down"></i>
                    </div>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <span className="mr-2">Popularity</span>
                  <div className="flex flex-col">
                    <div className="p-1" onClick={sortPopularityInc}>
                      <i className="fa-solid fa-arrow-up"></i>
                    </div>
                    <div className="p-1" onClick={sortPopularityDesc}>
                      <i className="fa-solid fa-arrow-down"></i>
                    </div>
                  </div>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                return (
                  (currentGenre === "All Genres" ||
                    genres[movieObj.genre_ids[0]] === currentGenre) &&
                  movieObj.title.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        src={`https://media.themoviedb.org/t/p/original/${movieObj.backdrop_path}`}
                        className="h-[8rem] w-[12rem]"
                        alt={movieObj.title}
                      />
                      <div className="mx-10 text-xl">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genres[movieObj.genre_ids[0]]}</td>
                    <td
                      className="text-red-900 hover:cursor-pointer"
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
