import Register from './pages/register/register';
import Login from './pages/login/login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home/home';
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {checkAuth} from './store/authAction'
import Transact from './pages/transact/transact';
function App() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

 
useEffect(() => {
  dispatch(checkAuth());
}, [dispatch]);

  return (
     <Router>
       <Routes>
         <Route path="/" element ={!isLoggedIn?<Register/>:<Home/>}/>
         <Route path="/login" element ={!isLoggedIn?<Login/>:<Home/>}/>
         <Route path="/home" element ={isLoggedIn?<Home/>:<Login/>} />
         <Route path="/transact" element ={isLoggedIn?<Transact/>:<Login/>} />
       </Routes>
     </Router>
  );
}

export default App;
