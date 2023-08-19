const requests = {
  "Latest & Trending": `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_ApiKey}&language=en-US`,

  "Netflix Originals": `/discover/tv?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_networks=213`,

  "Movies Recommended For You": `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_ApiKey}&language=en-US`,

  "Shows Recommended For You": `tv/top_rated?api_key=${process.env.REACT_APP_TMDB_ApiKey}&language=en-US&page=1`,

  "Popular in Action": `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=28`,

  "Popular in Comedy": `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=35`,

  "Best of Horrar": `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=27`,

  "Popular in Romance": `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=10749`,

  "Popular in Mystery": `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=9648`,

  "Best of Superheroes": `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=878`,

  "Popular in Western": `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=37`,

  "Best of Animation": `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=16`,

  "Quix Shows": `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=10770`,

  "Popular  Movies": `movie/popular?api_key=${process.env.REACT_APP_TMDB_ApiKey}&language=en-US&page=1`,

  "Popular Shows": `tv/popular?api_key=${process.env.REACT_APP_TMDB_ApiKey}&language=en-US&page=1`,

  "Popular in Documentaries": `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=99`,
};

export default requests;
