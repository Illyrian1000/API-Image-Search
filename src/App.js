import { useState } from "react";
import "./App.css";

import PhotoCard from "./components/PhotoCard";
import SearchBar from "./components/SearchBar";
import { createClient } from "pexels";

const client = createClient(
  "pzno7JNXYeKyChmP98oe07aEEg4BRsJWCZe2GGqOCFpXFB1cw2yBQtp8"
);

function App() {
  const [imgArr, setImgArr] = useState([]);
  let query;
  let count = 0;

  function loadImages(e) {
    query = e;
    client.photos
      .search({ query, per_page: 80 })
      .then((photos) => {
        if (photos) {
          setImgArr([]);
          let mainArr = [[], [], [], [], [], [], []];

          photos.photos.map((e) => {
            if (count < 7) {
              mainArr[count].push(e);
              count++;
            } else {
              count = 0;
              mainArr[count].push(e);
              count++;
            }
          });
          setImgArr(mainArr);
        }
      })
      .catch((err) => console.error("there is an error: ", err));
  }

  function test(array) {
    if (array) {
      return array.map((element) => {
        return (
          <PhotoCard
            img={element.src.medium}
            orgImg={element.src.original}
            key={Math.random()}
          />
        );
      });
    }
  }

  return (
    <div id="appBody">
      <SearchBar clicked={loadImages} />
      <div id="imagesContainer">
        <div id="imageContainer">{test(imgArr[0])}</div>
        <div id="imageContainer">{test(imgArr[1])}</div>
        <div id="imageContainer">{test(imgArr[2])}</div>
        <div id="imageContainer">{test(imgArr[3])}</div>
        <div id="imageContainer">{test(imgArr[4])}</div>
        <div id="imageContainer">{test(imgArr[5])}</div>
        <div id="imageContainer">{test(imgArr[6])}</div>
      </div>
    </div>
  );
}

export default App;
