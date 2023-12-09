import { useState } from "react";
import "./SearchBar.css";
export default function SearchBar(props) {
  const [searchKey, setSearchKey] = useState("");

  function changeSearchKey(e) {
    e.preventDefault();
    setSearchKey(e.target.value);
    console.log(e.target.value);
  }

  function submitValue(e) {
    e.preventDefault();
    if (searchKey) {
      console.log(searchKey);
      props.clicked(searchKey);
    } else {
      console.log("Search for an image");
    }
  }

  return (
    <section id="searchBar">
      <input
        type="text"
        placeholder="search image"
        onChange={changeSearchKey}
        value={searchKey}
      ></input>

      <a href="/">
        <button className="bn632-hover bn22" onClick={submitValue}>
          Search
        </button>
      </a>
    </section>
  );
}
