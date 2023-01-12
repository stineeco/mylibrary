import React from "react";
import images from "./images/index.js";

import './BookCard.css'

const BookCard = () => {
  
    return(
      
      
        <div className="centreimg  " >
          
            <img className=" bg-light-green dib br2 pa1  grow bw2 shadow-5" alt='Books' src={images.homeview} />
              <img className=" bg-light-green dib br2 pa1  grow bw2 shadow-5"  alt='Books' src={images.homeview2} />
                <img className=" bg-light-green dib br2 pa1  grow bw2 shadow-5" alt='Books' src={images.homeview3} />
                  <img className=" bg-light-green dib br2 pa1  grow bw2 shadow-5" alt='Books' src={images.homeview4} />
                    <img className=" bg-light-green dib br2 pa1  grow bw2 shadow-5"  alt='Books' src={images.homeview5} />
                      <img className=" bg-light-green dib br2 pa1 grow bw2 shadow-5" alt='Books' src={images.homeview6} />
                      <img className=" bg-light-green dib br2 pa1 grow bw2 shadow-5"  alt='Books' src={images.homeview7} />
                      <img className=" bg-light-green dib br2 pa1  grow bw2 shadow-5" alt='Books' src={images.homeview8} />
            <img className=" bg-light-green dib br2 pa1  grow bw2 shadow-5" alt='Books' src={images.homeview9} />
              <img className=" bg-light-green dib br2 pa1  grow bw2 shadow-5"  alt='Books' src={images.homeview10} />
                <img className=" bg-light-green dib br2 pa1  grow bw2 shadow-5" alt='Books' src={images.homeview11} />
                  <img className=" bg-light-green dib br2 pa1  grow bw2 shadow-5" alt='Books' src={images.homeview12} />

                    
                    
            </div>
       
    
    )
}

export default BookCard;