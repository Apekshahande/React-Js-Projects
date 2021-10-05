import React, {useState} from 'react';

const App = () =>{
const[fullName, setfullName] = useState({
  fname: "",
  lname:"",
  email : "",
  cnumber: '',
  
});

const inputEvent = (event) =>{
  console.log(event.target.value);
  console.log(event.target.name);

  // const value = event.target.value;
  // const name = event.target.name;
  // using object destructuring we can write this code in oneline.

  const {value,name} = event.target;

  setfullName((preValue)=>{
    // it's hold the value it's having same property that fullName have.
    return {
       ...preValue,
      [ name] : value,
      //  name: value,
      //  it's giving last value of the value. it's adding new property.

    }
    // if(name ==="fName" ){
    //   return {
    //     fname: value,
    //     lname: preValue.lname,
    //     email: preValue.email,
    //     cnumber : preValue.cnumber,
    //   }
    // }else if (name === 'lName'){
    //   return {
    //     fname:preValue.fname,
    //     lname: value,
    //     email:preValue.email,
    //     cnumber : preValue.cnumber,
    //   }
    // }else if(name === 'eMalil'){
    //   return {
    //     fname:preValue.fname,
    //     lname: preValue.lname,
    //     email :value,
    //     cnumber : preValue.cnumber
    //   }

    // }else if(name === "cNumber"){
    //   return {
    //     fname:preValue.fname,
    //     lname: preValue.lname,
    //     email :preValue.email,
    //     cnumber : value,
    //   }

    // }
  })

}

const onSubmits =() =>{
  alert('Your form is sumbited.')
}

  return(
    <>
      <div>
      <form onSubmit = {onSubmits}>
       <h1> Hello {fullName.fname} {fullName.lname}</h1>
       <p>{fullName.email} </p>
       <p> {fullName.cnumber} </p>
        <input  type = "text"
          placeholder = "Enter Your Name"
          // name = "fName"
          name = "fname"
          onChange = {inputEvent} 
          value ={fullName.fname}
          >
        </input>
        <input  type = "text"
          placeholder = "Enter Your Last Name"
          // name = "lName"
          name = "lname"
          onChange = {inputEvent} 
          value ={fullName.lname}
          >
        </input>
        <input  type = 'email'
          placeholder = "Enter Your Email"
          // name = "eMalil"
          name = "email"
          onChange = {inputEvent} 
          value ={fullName.email}
          autoComplete ='off'
          >
        </input>
        <input  type = 'number'
          placeholder = "Enter Your Contact Number"
          // name = "cNumber"
          name = "cnumber"
          onChange = {inputEvent} 
          value ={fullName.cnumber}
          >
        </input>
        <button type ="submit"> Submit 😄</button>
        </form>
      </div>

    </>
  );
}

export default App;