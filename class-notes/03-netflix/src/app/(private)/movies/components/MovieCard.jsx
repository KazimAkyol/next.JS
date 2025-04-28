"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MovieCard = ({ id, vote_average, poster_path }) => {
  const router = useRouter();
  return (
    //* herhangi bir filme tiklayinca id'sini rota yaptik ve dynamic rotayi [] parantezle dosya acarak yakalayacagiz
    <div
      onClick={() => router.push("/movies/" + id)}
      className="w-40 h-[240] cursor-pointer relative"
    >
      {/* Image width height ve adresin yolunu nextconfig.js e bildirmemizi istiyor. */}
      <Image
        width={160}
        height={240}
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
      />

      <span className="text-white absolute bottom-1 right-1 font-semibold">
        {vote_average}
      </span>
    </div>
  );
};

export default MovieCard;
