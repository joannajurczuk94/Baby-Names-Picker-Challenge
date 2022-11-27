import React from "react";
import SingleNames from "./singleNames";

const RenderNames = ({
  favouriteNames,
  setFavouriteNames,
  arrayOfNames,
  setArrayOfNames,
}) => {
    return (
        <div className="App-body">
            {arrayOfNames
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((babyName, i) => {
            return <SingleNames
                babyName={babyName}
                key={i}
                i={i}
                onClick={() => {console.log(babyName);
                setFavouriteNames(favouriteNames.concat(babyName));
                setArrayOfNames(
                    arrayOfNames.filter((currentName) =>currentName.name!==babyName.name )
                );
            }} />;
        })
    }</div>
  );
};
export default RenderNames;