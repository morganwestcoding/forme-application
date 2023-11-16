import "./sidebar.css";
import FeedIcon from '@mui/icons-material/Feed';

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <FeedIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
      </ul>
    </div>
    </div>
  )
}
