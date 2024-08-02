const key = '12405d309b8606c7cb7fb5af7a4218ba'
const baseUrl = "https://www.themoviedb.org/";

const endpoints  = {
    popular : `${baseUrl}/movie/popular?api_key=${key}`,
    topRated :`${baseUrl}/movie/top_rated?api_key=${key}`,
};

export default endpoints