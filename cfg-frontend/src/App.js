import Register from './pages/register/register';
import Login from './pages/login/login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Sample from './pages/sample';
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {checkAuth} from './store/authAction'
function App() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

 
useEffect(() => {
  dispatch(checkAuth());
}, [dispatch]);

  return (
     <Router>
       <Routes>
         <Route path="/" element ={!isLoggedIn?<Register/>:<Sample/>}/>
         <Route path="/login" element ={!isLoggedIn?<Login/>:<Sample/>}/>
         <Route path="/home" element ={isLoggedIn?<Sample/>:<Login/>} />
       </Routes>
     </Router>
  );
}

export default App;
