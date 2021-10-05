import {Emoji} from './Task/emoji.json'
import Card from './Task/Card'
import {useState} from "react";


function App() {
  
  const [searchTerm,setSearchTerm] = useState('')

  return (
    <div className="App">
    
      <div className = "NavBar">
        <h1>Emoji Search </h1>
        <input type = 'text' placeholder ="Search your favourite emoji name." onChange={event=>{setSearchTerm(event.target.value)}} className="input" />

      </div>
     
      
      {Emoji.filter((val)=>{
        if(searchTerm === ""){
          return val;
        }else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val;
        }
      {/* }).map((val,index)=>{ */}
    
      }).slice(0, 10).map((val,index)=>{ 
        // it's for taking first 10 data from json file.
      console.log(index);
        return(
        <Card 
        title={val.title} 
        symbol ={val.symbol} 
        />
      );
    
      })}
    </div>
  );
}

export default App;
