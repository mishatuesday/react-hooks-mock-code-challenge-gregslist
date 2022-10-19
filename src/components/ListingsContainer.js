import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsData, deleteListing}) {
  return (
    <main>
      <ul className="cards">
        {
          listingsData.map(listing => {
            return <ListingCard key={listing.id} deleteListing={deleteListing} listing={listing} />
          })
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
