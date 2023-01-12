import React from "react";
import video from "./video";
import './HomeVideo.css'
import Button from 'react-bootstrap/Button';

const Homevideo =() =>{
    return(
        
      <div>
         <div className="ovar">
            <h1> About us</h1>
            <p> found in 1920, the stine Library was created by a genius known as stine<br></br>
                should we do this or not because am tired of doingf it by myseklf </p>
            <Button variant="dark">Join us </Button>
        </div>
        <div className="mainHomeVideo">
            <video className="vidhome"  src={video.homevideo} autoPlay loop muted/>
           
        </div>
        </div>
      
      
    )

}




 export default Homevideo