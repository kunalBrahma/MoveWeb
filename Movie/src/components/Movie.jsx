import MovieCard from "./MovieCard"

function Movie() {
  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-5" >
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    </div>
  )
}

export default Movie
