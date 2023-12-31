import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddReactionIcon from '@mui/icons-material/AddReaction';

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src={process.env.PUBLIC_URL + "/assets/person/1.jpeg"} alt=""/>
                <input placeholder="What's in your mind?" className='shareInput'/>
                </div>
                <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className='shareOption'>
                    <PermMediaIcon htmlColor="Black" className='shareIcon'/>
                    <span className="shareOptionText">Photo or Video </span>
                    </div>
                    <div className='shareOption'>
                    <LabelIcon htmlColor="Black" className='shareIcon'/>
                    <span className="shareOptionText">Tag </span>
                    </div>
                    <div className='shareOption'>
                    <AddLocationIcon htmlColor="Black" className='shareIcon'/>
                    <span className="shareOptionText">Location</span>
                    </div>
                    <div className='shareOption'>
                    <AddReactionIcon htmlColor="Black" className='shareIcon'/>
                    <span className="shareOptionText">Mood</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
