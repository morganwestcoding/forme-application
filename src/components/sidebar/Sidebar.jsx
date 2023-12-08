import "./sidebar.css";
import FeedIcon from '@mui/icons-material/Feed';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";
import StoreIcon from '@mui/icons-material/Store';

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <DynamicFeedIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <FeedIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Chat</span>
        </li>
        <li className="sidebarListItem">
          <StoreIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Market</span>
        </li>
        <li className="sidebarListItem">
          <BookmarkIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
          <HelpOutlineIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Questions</span>
        </li>
        <li className="sidebarListItem">
          <WorkIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
          <EventIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Events</span>
        </li>
      </ul>
      <button className="sidebarButton">Show more</button>
      <hr className="sidebarHr"/>
    <ul className="sidebarFriendList">
        {Users.map((u) =>(
          <CloseFriend key={u.id} user={u}/>
        ))}
    </ul>
    </div>
    </div>
  )
}
