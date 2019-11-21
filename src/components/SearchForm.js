import React, { useEffect, useState } from "react";
//import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function SearchForm( props ) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axiosWithAuth()
    .get(`${props.slash}`)
    .then(response => {
      console.log(response.data)
      const killsearch = "";

      const inSearchBar = response.data.filter(item =>
        (item.city != null) ? item.city.toLowerCase().includes(searchValue.toLowerCase()) : killsearch.includes(searchValue.toLowerCase())
      );
      props.setState(inSearchBar);

    })
    .catch( error => {
      console.log("error", error.message)
    })
  },[searchValue])

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
