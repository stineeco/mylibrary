import React from "react";
import video from "./video/index.js";
import Button from 'react-bootstrap/Button';
import './JoinUs.css'


const JoinUs =()=>{
    return(
        <div>
        <div className="joindec">
        <div className="patt">
        <video  className=" bg-light-green dib br2 pa1  grow bw2 shadow-5" src={video.joinusvid0} autoPlay loop muted/>
        </div>
        <div className="textdec">
            <h1>Become a member</h1>
            <p>
            Members have access to over a million books and periodicals,
             a superb online offering and an unforgettable building in beautiful St.<br></br>
             James's Square.<br></br>
             7,500 members, including some of the most familiar names in the literary world, 
             find the Library's resources invaluable.<br></br>
             We would love you to join them...
            </p>
            <Button variant="outline-dark">Join Us</Button>
        </div>

        <div className="sub">
        <h1>Subscribe to our newsletter </h1>
        <p>Sign up for London Library updates, 
           information on upcoming events, 
           membership offers and more. </p>
           <div className="button__box" >
            <Button variant="outline-secondary">Subscribe</Button>{' '}
           </div>
       </div>
          </div>
             </div>
    )
}

export default JoinUs