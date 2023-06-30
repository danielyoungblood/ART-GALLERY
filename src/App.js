import logo from "./logo.svg";
import "./App.css";
import ButtonsBar from "./components/ButtonsBar";
import Gallery from "./components/Gallery";
import { useState, useEffect } from "react";

function App() {
  let [artId, setArtId] = useState(12720);
  let [data, setData] = useState({});
  useEffect(() => {
    document.title = "Welcome to Artworld";
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    )
      .then((response) => response.json())
      .then((resData) => setData(resData));
  }, [artId]);

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  return (
    <div className="App">
      <Gallery
        objectImg={data.primaryImage}
        artist={data.artistDisplayName}
        title={data.title}
      />
      <ButtonsBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
