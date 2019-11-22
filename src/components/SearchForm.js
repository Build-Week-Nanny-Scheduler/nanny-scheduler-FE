import React, { useEffect, useState } from "react";
//import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function SearchForm(props) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axiosWithAuth()
      .get(`${props.slash}`)
      .then(response => {
        const nannyList = response.data.filter(nanny => nanny.isNanny);
        const killsearch = "";

        const inSearchBar = nannyList.filter(item =>
          item.isNanny
            ? item.city.toLowerCase().includes(searchValue.toLowerCase())
            : killsearch.includes(searchValue.toLowerCase())
        );
        props.setState(inSearchBar);
      })
      .catch(error => {
        console.log("error", error.message);
      });
  }, [searchValue]);

  const newLetterEntered = event => {
    setSearchValue(event.target.value);
  };

  return (
    <section className="search-form">
      {/*// Add a search form here*/}
      <form className="search">
        <input
          type="text"
          onChange={newLetterEntered}
          value={searchValue}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="Search by City"
          autoComplete="off"
        />
      </form>
    </section>
  );
}
