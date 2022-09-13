import React from "react";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [search, setSearch] = React.useState("");
  let [input, setInput] = React.useState("");
  const handleOnSearch = () => {
    // let inputElement = document.getElementById("search");
    // onSearch(input);
    // inputElement.value = "";
    onSearch(search);
    setSearch("")
  };
  return (
    <>
      <div className="searchBar">
        <input
          onInput={(e) => setInput(e.target.value)}
          className="form-control me-2"
          id="search"
          type="search"
          placeholder="Ciudad..."
          aria-label="Search"
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleOnSearch();
            }
          }}
          value = {search}
          onChange = {(e) =>setSearch(e.target.value)}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={() => handleOnSearch()}
        >
          Agregar
        </button>
      </div>
    </>
  );
}
