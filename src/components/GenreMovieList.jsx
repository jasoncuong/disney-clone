import React from "react";
import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenresList.Genres.map((item, index) => (
        <div className="p-8 px-8 md:px-16">
          <h2 className="text-[20px] font-bold text-white">{item.name}</h2>
          <MovieList genreId={item.id} index_={index} />
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;