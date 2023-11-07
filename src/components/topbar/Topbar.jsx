import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person'; 
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

export default function Topbar() {
  return (
    <div className="topbarContainer">
       <div className="topbarLeft">
        <span className="logo">ForMe Social</span>
       </div>
       <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon/>
          <input placeholder="search for friends,listings, or more" className="searchinput" />
        </div>
        </div>
       <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon/>
              <span className="topbarIconBadge">1</span>
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
          <img src="" alt="" className="topbar img" />
        </div>
       </div>
        </div>
  )
}
