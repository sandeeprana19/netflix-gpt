import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleSearchClick = async () => {
    console.log(searchText.current.value);

    // Make an API call to get movie results
    const getQuery =
      "Act as a movies recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me the names of 5 movies, comma separated like examples given ahead. Example: Gadar, Sholay, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write error handling
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    // Andaz Apna Apna, Chupke Chupke, Padosan, Hera Pheri, Mera Naam Joker
    const getMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // ["Andaz Apna Apna", "Chupke Chupke", "Padosan", "Hera Pheri", "Mera Naam Joker"]
    const promiseArray = getMovies.map((movie) => searchMoviesTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise];

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: getMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black grid grid-cols-12 w-full md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4"
          onClick={handleSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
