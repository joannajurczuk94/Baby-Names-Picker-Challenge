import React from "react";
import SingleNames from "./singleNames";

const Favorites = ({
  favouriteNames,
  setFavouriteNames,
  arrayOfNames,
  setArrayOfNames,
}) => {
  return (
    <div className="selectFavourite">
      <div className="fav">
        <h2>Favourite:</h2>
        {favouriteNames.map((favouriteName, i) => {
          return (
            <SingleNames
              babyName={favouriteName}
              i={i}
              key={i}
              onClick={() => {
                setArrayOfNames(arrayOfNames.concat(favouriteName));
                setFavouriteNames(
                  favouriteNames.filter((currentName) => {
                    return !favouriteName.name.includes(currentName.name);
                  })
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
