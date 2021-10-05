import React from 'react';
import Sdata from './Sdata';
import Cards from './Cards';

const Netflix = () =>{
    return(
        <Cards 
        key= {Sdata[1].id}
        //  every card component we should have key unique id.
        imgsrc = {Sdata[1].imgsrc}
        sname= {Sdata[1].sname}
        title = {Sdata[1].title}
        link = {Sdata[1].link}
        />
    );
}
export default Netflix;