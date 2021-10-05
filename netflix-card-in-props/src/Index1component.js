//  This file is for custom tag /component/ element.
import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import './index.css'



ReactDom.render(
  // for showing on react Dom.
  <>
  
    <h1 className="heading_style">List of top 5 Netflix Series in 2021</h1>
    <Card  imgsrc ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6viZYxV-FW5TpqPv_jkmoqz2IaMxBhF73Z8kik3xoumchmNl_XbAcOHFnMrESJdBhZw&usqp=CAU"
      title = "A Netflix Orignal Series"
      s_name ="Clickbait"
      link ="https://www.netflix.com/in/title/80991754?trackId=254743534&source=35"
    />
    {/* our own custom attribute mense propertis. */}
    {/* we created our custom tag and we can create our own custom attributes to it. */}
    <Card  imgsrc ="https://bingeddata.s3.amazonaws.com/uploads/2021/07/The-Chair.jpg"
      title = "A Netflix Orignal Series"
      s_name ="The Chair"
      link ="https://www.netflix.com/in/title/81206259?source=35"

      />
    {/* component's are reusable. */}
    <Card  imgsrc ="https://i.ytimg.com/vi/HkOguZfNJUo/maxresdefault.jpg"
      title = "A Netflix Orignal Series"
      s_name ="I Think You Should Leave"
      link ="https://www.netflix.com/in/title/80986854"

      />
        {/* we create own custom element. */}
      <Card  imgsrc ="https://i.ytimg.com/an/52TdOMqqeyk/15496557192095459688_mq.jpg?v=60c7cf00"
      title = "A Netflix Orignal Series"
      s_name ="Heist"
      link ="https://www.netflix.com/in/title/81087195"

      />

      <Card  imgsrc ="https://www.personality-database.com/profile_images/312447.png"
      title = "A Netflix Orignal Series"
      s_name ="Sweet Tooth"
      link ="https://www.netflix.com/in/title/81221380?source=35"

      />
    
  </>
 
  ,
  document.getElementById('root')
);