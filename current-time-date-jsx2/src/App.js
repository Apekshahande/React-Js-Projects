
import './App.css';

function App() {
  const fname = "Apeksha";
  const lname = "Hande";
  const currDate = new Date().toLocaleDateString();
  // Date 
  const currTime = new Date().toLocaleTimeString();
  //  Time .
  return (
    <div className="App">
      <h1>{`Hello, My Name is ${fname} and my surname is ${lname} .`}</h1>
      <p>{`Todays Date is : ${currDate}` }</p>
      <p>{`Current Time is : ${currTime}`} </p>
    </div>
  );
}

export default App;
