import React, { useEffect, useState } from 'react'
import "./listitem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from 'axios';
const Listitem = ({index}) => {
  const[movies,setMovies]=useState([]);
  const[error,setError]=useState(null);
  
  useEffect(()=>{
    axios.get('https://retoolapi.dev/ZooRQu/data')
      .then((response)=>{
        setMovies(response.data);
      })
      .catch((error)=>{
        setError(error.message);

      })
    
  },[]);
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
    "https://www.youtube.com/watch?v=_OKAwz2MsJs&pp=ygUNbW92aWUgdHJhaWxlcg%3D%3D";
  return (
    <div
    className="listItem"
    style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* <img
      src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
      alt=""
    />  */}
    
     {movies.map((movie)=>(
      <div key={movie.id}>
        <img src={movie.Link}/>
        </div>
    ))} 

    <ul>
      
    </ul>
    {isHovered && (
      <>
        <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrowIcon className="icon" />
            <AddIcon className="icon" />
            <ThumbUpOutlinedIcon className="icon" />
            <ThumbDownOutlinedIcon className="icon" />
          </div>
          <div className="itemInfoTop">
          {movies.map((movie)=>(
      <div key={movie.id}>
        <span>1 hour 14 mins</span>
        </div>
    ))} 
    {movies.map((movie)=>(
      <div key={movie.id}>
        <span className="limit">{movie.Rating}</span>
        </div>
    ))} 
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium hic rem eveniet error possimus, neque ex doloribus.
          </div>
          <div className="genre">Action</div>
        </div>
      </>
    )}
  </div>
);
}
export default Listitem