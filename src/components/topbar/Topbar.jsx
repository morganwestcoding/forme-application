import { Link } from 'react-router-dom';
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person'; 
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HomeIcon from '@mui/icons-material/Home';

export default function Topbar() {
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
              <span className="topbarIconBadge">1</span>
            </Link>
            </div>
            <div className="topbarIconItem">
              <ChatIcon/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <CircleNotificationsIcon/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
        
  )
}
