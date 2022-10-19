import React, {useState} from "react";

function ListingCard({listing, deleteListing}) {
  const [isFave, setIsFave] = useState(false)
  function toggleFave() {
    const newFave = !isFave
    setIsFave(newFave)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFave ? (
          <button className="emoji-button favorite active" onClick={() => toggleFave()} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => toggleFave()} >☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => deleteListing(listing)} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
