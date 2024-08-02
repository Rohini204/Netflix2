import React, { useRef, useState } from 'react'
import "./list.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Listitem from '../listitems/Listitem';
const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
        <span className="listt">Continue to watch
            <div className="wrapper">
                <ArrowBackIosIcon className='Slider left' onClick={() => handleClick("left")}           style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>  
                  <Listitem index={0}/>
                  <Listitem index={1}/>
                  <Listitem index={2}/>
                  <Listitem index={3}/>
                  <Listitem index={4}/>
                  <Listitem index={5}/>
                  <Listitem index={6}/>
                  <Listitem index={7}/>
                  <Listitem index={8}/>
                  <Listitem index={9}/>
                  
                
                </div>
                <ArrowForwardIosIcon className='Slider right'    onClick={() => handleClick("right")}/>
            </div>
        </span>
    </div>
  )
}

export default List