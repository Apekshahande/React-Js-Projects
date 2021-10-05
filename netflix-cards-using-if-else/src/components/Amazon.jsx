import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';


const Amazon = () =>{
    return(
        <Cards 
        key= {Sdata[4].id}
        //  every card component we should have key unique id.
        imgsrc = {Sdata[4].imgsrc}
        sname= {Sdata[4].sname}
        title = {Sdata[4].title}
        link = {Sdata[4].link}
        />
    );
}

export default Amazon;