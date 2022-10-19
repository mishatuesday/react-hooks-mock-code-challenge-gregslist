import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
const dataUrl = "http://localhost:6001/listings/"

function App() {
  const [listingsData, setListingsData] = useState([])
  useEffect(() => {
    fetch(dataUrl)
    .then(r => r.json())
    .then(data => setListingsData(data))
  }, [])

  function deleteListing(listing) {
    // fetch DELETE 
    fetch(`${dataUrl}${listing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
  })
    const newList = listingsData.filter(item => (item.id !== listing.id))
    setListingsData(newList)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer deleteListing={deleteListing} listingsData={listingsData} />
    </div>
  );
}

export default App;
