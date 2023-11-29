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
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt=""/>
                <input placeholder="What's in your mind?" className='shareInput'/>
                </div>
                <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className='shareOption'>
                    <PermMediaIcon className='shareIcon'/>
                    <span className="shareOptionText">Photo or Video </span>
                    </div>
                    <div className='shareOption'>
                    <LabelIcon className='shareIcon'/>
                    <span className="shareOptionText">Tag </span>
                    </div>
                    <div className='shareOption'>
                    <AddLocationIcon className='shareIcon'/>
                    <span className="shareOptionText">Location</span>
                    </div>
                    <div className='shareOption'>
                    <AddReactionIcon className='shareIcon'/>
                    <span className="shareOptionText">Mood</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
