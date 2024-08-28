import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movie }) => {
  return (
    <section className="transition-all duration-150 ease-in hover:scale-110">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] cursor-pointer rounded-lg border-gray-400 hover:border-[3px] md:w-[260px]"
      />
      <h2 className="mt-2 w-[110px] text-white md:w-[260px]">{movie.title}</h2>
    </section>
  );
};

export default HrMovieCard;
