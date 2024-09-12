const MovieCard = ({
  poster_path,
  title,
  handleWatchlist,
  handleRemoveFromWatchList,
  watchlist,
  movieObj,
}) => {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div
        className="h-[35vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-500 hover:cursor-pointer flex flex-col justify-between items-end"
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieObj) ? (
          <div
            onClick={() => handleRemoveFromWatchList(movieObj)}
            className="h-8 w-8 m-4 flex justify-center items-center rounded-lg bg-gray-900/60"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => handleWatchlist(movieObj)}
            className="h-8 w-8 m-4 flex justify-center items-center rounded-lg bg-gray-900/60"
          >
            &#10084;
          </div>
        )}

        <div className="text-white text-center text-xl bg-gray-900/60 p-2 w-full">
          {title}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
