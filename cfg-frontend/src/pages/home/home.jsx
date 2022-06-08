import './home.css'
import Navigation from '../../components/navigation/navigation';
import Maps from '../../components/maps/maps'
import Org from '../../components/org-list/org';

const Home = () => {
    return ( 
     <div className="home-body">
         <div className="nav">
             <Navigation/>
         </div>
         <div className="menu">
          <Org></Org>
         </div>
         <div className="map">
             <Maps/>
         </div>
     </div>
     );
}
 
export default Home;