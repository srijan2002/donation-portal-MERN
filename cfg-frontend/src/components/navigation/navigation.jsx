import './navigation.css'
import {MdDashboard} from 'react-icons/md'
import {FcAbout} from 'react-icons/fc'
import {GiWallet} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
// import {AiOutlineSearch} from 'react-icons/ai'
const Navigation = () => {
    return ( 
    <div className='nav-menu'>
       <div className='nav-item'>
           <MdDashboard/><div className='nav-icon'>Dashboard</div>
       </div>
       <div className='nav-item'>
       <FcAbout/><div className='nav-icon'>About</div>
           </div>
       <div className='nav-item'>
       <GiWallet/><div className='nav-icon'>Transactions</div> 
       </div>
       <div className='nav-item'>
       <CgProfile/><div className='nav-icon'>Profile</div> 
       </div>
       {/* <div className='nav-item'>
       <AiOutlineSearch/><div className='nav-icon'>Search</div> 
       </div> */}
    </div>
     );
}
 
export default Navigation;