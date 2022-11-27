import React from "react";
import names from "./babyNamesData.json";
import { useState } from "react";
import "./App.css";
import Favorites from "./Favorites";
import RenderNames from "./RenderNames";

function filterNames(inputName) {
  return names.filter((babyName) => {
    return (
      babyName.name.toLowerCase().includes(inputName.toLowerCase())
    );
  });
}

function filterGender(inputName) {
  return names.filter((babyName) => {
    return (
babyName.sex.toLowerCase() ===inputName
    );
  });
}


function App() {
  const [arrayOfNames, setArrayOfNames] = useState(names);
const [favouriteNames, setFavouriteNames] = useState([]);

  return (
    <div className="App">
      <h1>Baby Names Picker</h1>
      <form className="nosubmit">
        <input
          type="text"
          placeholder="Search for a name..."
          className="nosubmit"
          onChange={(e) => {
            setArrayOfNames(filterNames(e.target.value));
          }}
        ></input>
        <button
          className="btn-all"
          onClick={(e) => {
            e.preventDefault();
            setArrayOfNames(names);
          }}
        >
          All Names
        </button>
        <button
          className="btn-m"
          onClick={(e) => {
            e.preventDefault();
            setArrayOfNames(filterGender("m"));
          }}
        >
          Boys
        </button>
        <button
          className="btn-f"
          onClick={(e) => {
            e.preventDefault();
            setArrayOfNames(filterGender("f"));
          }}
        >
          Girls
        </button>
      </form>

      <Favorites
        favouriteNames={favouriteNames}
        setFavouriteNames={setFavouriteNames}
        setArrayOfNames={setArrayOfNames}
        arrayOfNames={arrayOfNames}
      />

      <RenderNames
        arrayOfNames={arrayOfNames}
        favouriteNames={favouriteNames}
        setFavouriteNames={setFavouriteNames}
        setArrayOfNames={setArrayOfNames}
      />
    </div>
  );
}
export default App;
