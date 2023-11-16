import "./sidebar.css";
import FeedIcon from '@mui/icons-material/Feed';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <RssFeedIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <FeedIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Chat</span>
        </li>
        <li className="sidebarListItem">
          <VideoLibraryIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
          <GroupsIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Group</span>
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
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
        <span className="sidebarFriendName">Jane Doe</span>
      </li>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
        <span className="sidebarFriendName">Jane Doe</span>
      </li>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
        <span className="sidebarFriendName">Jane Doe</span>
      </li>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
        <span className="sidebarFriendName">Jane Doe</span>
      </li>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
        <span className="sidebarFriendName">Jane Doe</span>
      </li>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
        <span className="sidebarFriendName">Jane Doe</span>
      </li>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
        <span className="sidebarFriendName">Jane Doe</span>
      </li>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
        <span className="sidebarFriendName">Jane Doe</span>
      </li>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
        <span className="sidebarFriendName">Jane Doe</span>
      </li>
      <li className="sidebarFriend">
        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
        <span className="sidebarFriendName">Jane Doe</span>
      </li>
    </ul>
    </div>
    </div>
  )
}
