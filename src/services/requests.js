const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_ApiKey}&language=en-US`,

  fetchNetFlixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_networks=213`,

  fetchTopRatedMovies: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_ApiKey}&language=en-US`,

  fetchTopRatedShows: `tv/top_rated?api_key=${process.env.REACT_APP_TMDB_ApiKey}&language=en-US&page=1`,

  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=28`,

  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=35`,

  fetchHorroMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=27`,

  fetchRomanticMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=10749`,

  fetchMysteryMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=9648`,

  fetchSciFi: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=878`,

  fetchWesternMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=37`,

  fetchAnimationMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=16`,

  fetchTv: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=10770`,

  fetchPopularMovies: `movie/popular?api_key=${process.env.REACT_APP_TMDB_ApiKey}&language=en-US&page=1`,

  fetchPopularShows: `tv/popular?api_key=${process.env.REACT_APP_TMDB_ApiKey}&language=en-US&page=1`,

  fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_ApiKey}&with_genres=99`,
};

export default requests;
