import './form.css'
import lottie from "lottie-web";
import axios from 'axios';
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import animation from '../../assets/login.json';
import {useDispatch} from 'react-redux'
import { authActions } from "../../store/authSlice";

const Form = ({type}) => {
   const dispatch = useDispatch();
   const history = useNavigate();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   useEffect(()=>{
    lottie.loadAnimation({
        container: document.getElementsByClassName('anim')[0],
        animationData: animation,renderer: "svg", // "canvas", "html"
        loop: true,  autoplay: true,  
      });},[]);


   const submitForm = (e)=>{
      e.preventDefault();
      const body = {name:name,email: email,password:password};
      try{
         axios.post("http://localhost:3001/",body)
         .then(response=>{
            // console.log(response)
            if(response.status===200)
            {
               dispatch(authActions.login());
               history('/login')
            }

         })
        }catch (err) {
         console.log(err);
       }
   }
   const loginForm = (e)=>{
      e.preventDefault();
      const body = {name:name,email: email,password:password};
      try{
         axios.post("http://localhost:3001/login",body)
         .then(response=>{
            console.log(response)
            if(response.status===200)
            {    
                 localStorage.setItem('token',response.data.token)
                 dispatch(authActions.login());
                 history('/home')
            }

         })
        }catch (err) {
         console.log(err);
       }
   }
    return ( 
    <div className="form-body">
        <div className="form">
           {type==="Register" &&<div className="form-title">Get Started</div>}
           {type==="Login" &&<div className="form-title">Welcome Back</div>}
          {type==="Register" && <div className="form-login">Register</div>}
          {type==="Login" && <div className="form-login">Login</div>}
         {type==="Register" && <div className="row">
          <div className="col-25"> <label for="lname">Name</label></div>
           <div className="col-75"><input type="text" id="name" name="lastname" placeholder="Your Name" className="input" onChange={(e) => setName(e.target.value)}></input></div>
          </div>}
          <div className="row">
          <div className="col-25"> <label for="lname">Email Id</label></div>
           <div className="col-75"><input type="text" id="email" name="lastname" placeholder="Your Email" className="input" onChange={(e) => setEmail(e.target.value)}></input></div>
          </div>
          <div className="row">
          <div className="col-25"> <label for="lname">Password</label></div>
           <div className="col-75"><input type="password" id="pass" name="lastname" placeholder="Your Password" className="input" onChange={(e) => setPassword(e.target.value)}></input></div>
          </div>
         {type==="Register" && <div className="row"><div className="submit" onClick={submitForm}>
             Sign Up
          </div></div>}
          {type==="Login" && <div className="row"><div className="submit" onClick={loginForm}>
             Sign In
          </div></div>}
        </div> 
        <div className="art">
        <div className='anim'  />
           </div> 
    </div>
     );
}
 
export default Form;