import { Component } from "react";
import {Map,GoogleApiWrapper} from 'google-maps-react'

class Maps extends Component{
    render(){
        return(
           <Map
           resetBoundsOnResize={true}
               google={this.props.google}
               style = {{width:"48%",height:"100%"}}
               zoom = {12}
              
               initialCenter = {{
                   lat:22.5726,
                   lng: 88.3639
               }}
           >
               </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey:'AIzaSyCelVzgAhPqJdMUcTdjyl8J8ueYFDtqdJ4'
})(Maps)