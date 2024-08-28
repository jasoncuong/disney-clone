import React, { useEffect, useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);

  const elementRef = useRef();

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className={`absolute z-10 hidden cursor-pointer p-2 text-[50px] text-white md:block ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex gap-8 overflow-x-auto scroll-smooth px-3 pb-4 pt-4 scrollbar-none"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <HiChevronRight
        className={`absolute right-0 top-0 z-10 hidden cursor-pointer p-2 text-[50px] text-white md:block ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieList;
