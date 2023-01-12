import { exportDefaultDeclaration } from "@babel/types";
import React from "react";
import './Home.css'
import BookCard from "./BookCard";
import JoinUs from "./joinUs";
import BaseContact from "./BaseContacts";
import Homevideo from "./HomeVideo";






const Home = () =>{
    return(
        <div>
            <Homevideo/>
             <BookCard/>
        <div className='content'>
    <h1 className="homehead">Truth and Reconciliation</h1>
    <p>Pickering Public Library acknowledges the City of Pickering resides on land within the Treaty and traditional territory of the Mississaugas of Scugog Island First Nation and Williams Treaties signatories of the Mississauga and Chippewa Nations. Pickering is also home to many Indigenous persons and communities who represent other diverse, distinct, and autonomous Indigenous nations. This acknowledgement reminds us of our responsibilities to our relationships with the First Peoples of Canada, and to the ancestral lands on which we learn, share, work, and live.</p>
    </div>
    <div>
       <JoinUs/>
       <BaseContact/>
    </div>
            </div>
    )
}


export default Home