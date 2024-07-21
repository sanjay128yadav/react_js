import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from "react";
//import { Users } from './Users'
import Users from './Users';
import { UserClass, TeacherClass } from './UsersClass';
import Myuser from './Myuser.jsx';
import Counter from './Counter.jsx';
import ClassCounter from './ClassCounter.jsx';
import UsersCardProps from './UsersCardProps.jsx';
import UsesProps from './UsersProps.jsx';
import UsersListClassProps from './UsersListClassProps.jsx';


//import { TeacherClass } from './UsersClass';

function App() {

  const usersData = [
    { name: 'Mansh Kumar', age: 24, email: 'manish@gmail.com' },
    { name: 'Sonu Kumar', age: 24, email: 'manish@gmail.com' }
  ];

  function Common() {
    return(
      <div>This Common Component Called from within another component </div>
    ) 
  }

  let message = "Hi good morning";
  const demo = () => {
        alert("Hi how are you? I am fine here");
        alert(message);
  }

  let [data, setData] = useState("React Js"); 

  const updateData = () => {
    setData("Python with React Js");
    alert(data);
  }

  console.log("Render...........");

  // Example 3
  const [name, setName] = useState("Old Props Data");

  // Use propes with Class Component

  

  
  return (
    <>
    <div className="App">
      <h1>{data}</h1>     

      <Users />
      <UserClass />
      <TeacherClass />
      <MonitorClass />
      <Myuser />
      {Common()}
      <Common />
      <button onClick={demo}>Click me</button><br/>
      <button onClick={()=> alert("Hi I am Sanjay Yadav")}>Click me using Fat Arrow Function</button><br/>
      <button onClick={()=> demo()}>Click here</button><br/>
      <button onClick={updateData}>Update Data</button>
      <br />
      <button onClick={()=> setName("Updated Props Data")}>Update Props Data</button>
      <br />
      <UsesProps name={name}/>
      <br />
      <UsersListClassProps name="Sonu Kumar"  email="sonu@gmail.com" />      
      <br />
      <Counter />

      <br /><br />
      <ClassCounter />

      {/* Example 2 */}

      {
        usersData.map((user, index) => (
          <UsersCardProps
            key = {index}
            name = {user.name}
            age = {user.age}
            email = {user.email}
          />
        ))
      }
            
    </div>
    </>
  );
}

class MonitorClass extends Component {
  render() {
      return(
          <div>Monitor Class Component</div>
      )
  }
}

// Inside  the App.js
/*
function Users() {
  return <h1>Js Component</h1>
}
  */

export default App;
