import './listingcard.css';

const ListingCard = ({ /* props */ }) => {
    
  return (
    <div className="card-container" /* Other properties */>
      <div className="image-container">
        <Image/>
        <div className="heart-button">
          <HeartButton/>
        </div>
      </div>
      <div className="card-title">
        {data.title}
      </div>
      <div className="text-light">
        {`${cityName}, ${stateName}`}
      </div>
      <div className="text-light">
        <ServiceSlider /* ... */ />
      </div>
      {/* ... */}
    </div>
  );
};
