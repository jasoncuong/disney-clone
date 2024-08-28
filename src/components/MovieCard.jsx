import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        className="w-[110px] cursor-pointer rounded-lg border-gray-400 transition-all duration-150 ease-in hover:scale-110 hover:border-[3px] md:w-[200px]"
      />
    </>
  );
};

export default MovieCard;
