import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-full">
        <img
          src={BG_URL}
          alt="Multi movies background"
          className="w-screen h-screen object-cover"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
