import React, { useEffect } from 'react';
import IntelligenceEducator from '../intelligenceeducator/intelligenceeducator';
import Educatorherobanner from '../educatorherobanner/educatorherobanner';
import Educatorweoffers from '../educatorweoffers/educatorweoffers';
import Heading from '../heading/heading';
import Getintouch from '../getintouch/getintouch';
import Footer from '../footer/footer';

function Educator(){
    return(
        <div>
            <Educatorherobanner/>
            <IntelligenceEducator/>
            <Heading heading="We Offer"/>
            <Educatorweoffers/>
            <Heading heading="Get In Touch"/>
            <Getintouch/>
            <div className="mt-40">
            <Footer/>
            </div>
        </div>
    );
}
export default Educator;