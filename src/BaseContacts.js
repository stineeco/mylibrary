import React from "react";
import './BaseContacts.css'
import Logos from "./Logos/Index";


const BaseContact = () =>{
   return(
    <div className="base_contacts">
   <div className="contact_icon">
    <div className="about__library">
    <div className="library__header">
    <p>About Your Library</p> 
    </div>
    <div class="library__p">
    <p>Overview</p>
    <p>Leadership Team</p>
    <p>Pickering Public Library Board</p>
     <p>Library Policies</p>
     <p>FAQs</p>
    </div>
    </div>
    <div className="using__library">
    <div className="library__header">
    <p>Get a Library Card</p> 
    </div>
    <div class="library__p">
     <p>Get a Library Card</p>
     <p>Online Membership</p>
     <p>Printing & Tech Services</p>
     <p>Assistive Services</p>
      <p>Room Bookings</p>
      <p>Interlibrary Loan</p>
    </div>
    </div>

    <div className="support__library">
    <div className="library__header">
    <p>Support Your Library</p> 
    </div>
    <div class="library__p">
    <p>Donate</p>
     <p>Propose an Event</p>
     <p>Volunteer</p>
     <p>Anti-Black Racism Working</p>
     <p>Group</p>
    <p>Job Opportunities</p>
    </div>
    </div>

    <div className="informed__library">
    <div className="library__header">
    <p>Stay Informed</p> 
    </div>
    <div class="library__p">
    <p>Newsletters</p>
<p>Media Releases</p>
<p>Message from the CEO</p>
    </div>
    </div>


    <div className="contact__library">
    <div className="library__header">
    <p>Contact Us</p> 
    </div>
    <div class="library__p">
    <p>Pickering Public</p>
    <p>One the Esplanade</p>
     <p>PO Box 368</p>
     <p> Pickering, Ontario</p>
     <p> L1V 2R6</p>
     <p className="contact_underline"> 905.831.6265</p>
    </div>
    </div>


    </div>

     <div className="icon_decor">
        <a href="https://www.instagram.com/direct/inbox/" >
        <img className="icon" alt="facbook" src={Logos.facbook} />
        </a>
        <img className="icon" alt="instagram" src={Logos.instagram} />
        <img className="icon" alt="instagram" src={Logos.Twitter} />
        <img className="icon" alt="instagram" src={Logos.Linkdin} />
        <img className="icon" alt="instagram" src={Logos.Git} />
     
    </div>
    </div>
  
  
   )
}

export default BaseContact