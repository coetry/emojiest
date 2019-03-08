import React, { useState } from "react";
import Fuse from "fuse.js";

import { allEmojis as emojis } from "../../__data__/allEmojis";
import styles from "./searchBar.module.css";

const images = require("../../assets/svgs/1f50d.svg");
const imageSrc = unicode => {
  return require("../../assets/svgs/" + unicode + ".svg");
};

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  const options = {
    keys: ["label"]
  };
  const fuse = new Fuse(emojis, options);
  const handleSearch = e => {
    const value = e.target.value;
    setSearch(value);
    const results = fuse.search(value);
    props.results(results);
    props.inputValue(value);
    console.log(results);
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <img className={styles.searchIcon} src={images} alt="search icon" />
        <input
          className={styles.input}
          placeholder="Search for emojis"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
