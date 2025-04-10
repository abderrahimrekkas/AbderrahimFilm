import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoCard = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  const fetchInfo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US`
    );
    const data = await response.json();
    setInfo(data);
  };

  useEffect(() => {
    fetchInfo();
  }, [id]);

  if (!info) return <div className="text-center">Loading...</div>;

  return (
    <div className=" mx-auto my-8 px-4">
      <div className="flex flex-nowrap gap-6 ">
        {/* Image à gauche */}
        <div className="w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
            alt={info.title}
            className="rounded-xl shadow-lg w-50"
          />
        </div>

        {/* Infos à droite */}
        <div className="w-2/3 space-y-3">
          <h2 className="text-3xl font-bold text-gray-800">{info.title}</h2>
          <p><span className="font-semibold">Overview:</span> {info.overview}</p>
          <p><span className="font-semibold">Release Date:</span> {info.release_date}</p>
          <p><span className="font-semibold ">Rating:</span> {info.vote_average} / 10</p>
          <p><span className="font-semibold">Genres:</span> {info.genres.map(genre => genre.name).join(', ')}</p>
          <p><span className="font-semibold">Status:</span> {info.status}</p>
          <p><span className="font-semibold">Runtime:</span> {info.runtime} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
