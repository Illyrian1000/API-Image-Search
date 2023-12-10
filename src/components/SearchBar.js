import { useState } from "react";
import "./SearchBar.css";
export default function SearchBar(props) {
  const [searchKey, setSearchKey] = useState("");

  function changeSearchKey(e) {
    e.preventDefault();
    setSearchKey(e.target.value);
  }

  function submitValue(e) {
    e.preventDefault();
    if (searchKey) {
      props.clicked(searchKey);
    } else {
      console.log("Search for an image");
    }
  }

  function submitEnter(e) {
    if (e.key === "Enter") {
      submitValue(e);
    }
  }

  return (
    <section id="searchBar">
      <input
        type="text"
        placeholder="search image"
        onChange={changeSearchKey}
        value={searchKey}
        onKeyDown={submitEnter}
      ></input>

      <button className="bn632-hover bn22" onClick={submitValue}>
        Search
      </button>
    </section>
  );
}
