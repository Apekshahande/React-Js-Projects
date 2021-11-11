import React from 'react';



const Footer = () => {
    const year = new Date().getFullYear();
    // new Date() is object.
    // call the getfull year function.will give current year 
    return (
        <footer>
            <p> copyright ©️ {year}</p>
        </footer>
       
    )
}

export default Footer;
