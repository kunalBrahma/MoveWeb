

const MovieCard = ({poster_path, title}) => {
  return (
    <div className="h-[35vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-500 hover:cursor-pointer relative" 
    style={{backgroundImage: `url(https://media.themoviedb.org/t/p/original/${poster_path})`}}>
  <div className="absolute bottom-0 w-full">
    <div className="text-white text-center text-xl bg-gray-900/60 p-2">
      {title}
    </div>
  </div>
</div>

      
    
  )
}

export default MovieCard
