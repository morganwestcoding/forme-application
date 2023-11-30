import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const HomeRightBar = () => {
    return(
      <>
       <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Paolo Foster</b> and <b>3 other friends</b> have a birthday.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt=""/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  };

  const ProfileRightBar = () =>{
  return (
    <>
    <h4 className="rightbarTitle">User information</h4>
    <div className="rightbarInfoItem">
      <span className="rightbarInfoKey">City</span>
      <span className="rightbarInfoValue">New York</span>
    </div>
    <div className="rightbarInfoItem">
      <span className="rightbarInfoKey">From</span>
      <span className="rightbarInfoValue">Madrid</span>
    </div>
    <div className="rightbarInfoItem">
      <span className="rightbarInfoKey">Relationship:</span>
      <span className="rightbarInfoValue">Single</span>
    </div>
    </>
  )
}
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       <ProfileRightBar/>
      </div>
    </div>
  )
}