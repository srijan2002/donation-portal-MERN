 import axios from "axios";
 import { authActions } from "./authSlice";


 export const checkAuth = ()=>{
    // console.log("Helloj");
    return async (dispatch) => {
      var token = localStorage.getItem('token');
      //  console.log(token);
       try{
        axios.get("http://localhost:3001/protected",{headers:{'Authorization':token}})
        .then(response=>{
           console.log(response)
           if(response.status===200)
           {
             dispatch(authActions.login());
           }
           else{
              dispatch(authActions.logout());
           }
        })
       }catch (err) {
        console.log(err);
      }
    }
 };