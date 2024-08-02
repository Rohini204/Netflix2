// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import Listitem from '../Components/listitems/Listitem';

// const Api = () => {
//     const[movies,setMovies]=useState([]);
//     const[error,setError]=useState(null);
//     useEffect(()=>{
//         const fetchMovies = async()=>{
//             const options = {
//                 method: 'GET',
//                 url: 'https://imdb-top-100-movies.p.rapidapi.com/',
//                 headers: {
//                   'x-rapidapi-key': 'e21d50845cmsh52c31d8300c8ff7p103d85jsndc17434e137f',
//                   'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
//                 }
//               };
              
//               try {
//                   const response = await axios.request(options);
//                   setMovies(response.data);
//               } catch (error) {
//                   console.error(error);
//               }
//         }
//         fetchMovies();
//     },[]);
//   return (
//     <div>
//       {error ? (<p>{error}</p>):(
//         <>
//         <Listitem movies={movies}/>
//         </>
//       )
//       }
//     </div>
//   )
// }

// export default Api