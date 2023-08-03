const key = "8e36c278c22f04642423128554058a3d";

const requests = {
  trendingRequest: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US/results/614479`,
  upcomingRequest: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  popularRequest: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  topRatedRequest: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
};

export default requests