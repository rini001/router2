
import './App.css';
import { useContext, useEffect} from 'react';
import { Routes,Route, useNavigate } from 'react-router-dom';
import {AuthContext} from "./context/AuthContext"
import Dashboard from './components/dashboard/Dashboard';
import { Login } from './components/Login';
function App() {
  const {isLoggedIn}=useContext(AuthContext)
  const navigate= useNavigate();

  useEffect(()=>{
    if(isLoggedIn){
      navigate("/dashboard")
    }
    else{
      navigate("/login")
    }
  },[navigate,isLoggedIn])
  return (
    <div className="App box">
     <Routes>
      {isLoggedIn? (<Route path="/dashboard/*" element={<Dashboard/>}/>) : 
      (<Route path="/login" element={<Login/>}/>) }
     </Routes>
    </div>
  );
}

export default App;
