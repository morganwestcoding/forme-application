import { Link } from 'react-router-dom';
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person'; 
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HomeIcon from '@mui/icons-material/Home';

export default function Topbar({user}) {
  return (
    <div className="topbarContainer">
       <div className="topbarLeft">
        <span className="logo">
          <img src="/assets/logo-white.png" alt=""/>
        </span>
       </div>
       <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon"/>
          <input placeholder="" className="searchInput" />
        </div>
        </div>
       <div className="topbarRight">
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <Link to="/home" className="topbarLink">
              <HomeIcon/>
            </Link>
            </div>
            <div className="topbarIconItem">
            <Link to="/profile" className="topbarLink">
              <PersonIcon />
            </Link>
            </div>
            <div className="topbarIconItem">
              <ChatIcon/>
            </div>
            <div className="topbarIconItem">
              <CircleNotificationsIcon/>
            </div>
            <div className="topbarIconItem">
            <img src={user.profilePicture} alt="" className="topbarImg" />
            </div>
            
          </div>
         
        </div>
    </div>
        
  )
}
