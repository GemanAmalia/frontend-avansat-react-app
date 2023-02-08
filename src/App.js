import { useState, useEffect } from "react";
import "./App.css";
import {db} from "./firebase-config";
import {collection, getDocs} from "firebase/firestore";
import { BrowserRouter as Router, Route, Routes, Link, ProtectedRoute } from "react-router-dom";
import './Authentication/Authentication.css';
import {Login} from "./Authentication/Login";
import {Register} from "./Authentication/Register";
import { RecoverPassword } from "./Authentication/RecoverPassword";
import { Therapists } from "./Therapists/Therapists";
import {Home } from "./Home/Home";
import { Profile } from "./Profile/Profile";




function App() {
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "users");

  // useEffect(() => {
    
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, [])
    

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/Authentication/Login" element={<Login/>}/>
        <Route exact path="/Authentication/RecoverPassword" element={<RecoverPassword/>}/>
        <Route exact path="/Authentication/Register" element={<Register/>}/>
        <Route exact path="" element={<Login />} />
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Therapists" element={<Therapists/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
    </>
      // <div className="App">
      //   {console.log("users: " , users)}
      //   {users.map((user) => {
      //     return (
      //       <div>
      //         {" "}
      //         <h1>Name: {user.name}</h1>
      //         <h1>Age: {user.age}</h1>
      //       </div>
      //     );
      //     })}
      // </div>

    );
}

export default App;
