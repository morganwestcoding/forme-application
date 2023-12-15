import React from 'react'
import './marketfeed.css'

export default function MarketFeed() {
  const squares = Array.from({ length: 10 }); // Create an array of 10 items

  return (
    <div className="marketFeed">
      {squares.map((_, index) => (
        <div key={index} className="square">
         test
        </div>
      ))}
    </div>
  );
}
