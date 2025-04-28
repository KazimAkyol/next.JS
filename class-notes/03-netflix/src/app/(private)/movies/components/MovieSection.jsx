import { getirMovies } from "@/helpers/movieFunctions";
import Image from "next/image";
import React from "react";

const MovieSection = async ({ type }) => {
  const filmler = await getirMovies(type);

  return (
    <div>
      {filmler.map((a, i) => (
        <div key={i}>
          <Image
            width={160}
            height={240}
            src={`https://image.tmdb.org/t/p/w1280${a.poster_path}`}
          />
          <span>{a.vote_average}</span>
        </div>
      ))}
    </div>
  );
};

export default MovieSection;
