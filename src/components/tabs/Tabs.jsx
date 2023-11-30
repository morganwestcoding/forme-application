import React, { useState } from 'react';
import './tabs.css';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default function Tabs() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`tabcontainer ${isCollapsed ? 'collapsed' : ''}`}>
      <div className='tabbed round'>
        <ul>
          <li className="tab-item nails"><span>Nails</span></li>
          <li className="tab-item barbers"><span>Barbers</span></li>
          <li className="tab-item salon"><span>Salon</span></li>    
          <li className="tab-item massage"><span>Massage</span></li>
          <li className="tab-item eyebrows active"><span>Eyebrows</span></li>
          <li className="tab-item facial"><span>Facial</span></li>
          <li className="tab-item trainer"><span>Trainer</span></li>
          <li className="tab-item flex"><span>Flex</span></li>    
        </ul>
      </div>
      <button className="collapse-button" onClick={toggleCollapse}>
        <ExpandCircleDownIcon className={`arrow ${isCollapsed ? 'up' : 'down'}`} />
      </button>
    </div>
  );
}
