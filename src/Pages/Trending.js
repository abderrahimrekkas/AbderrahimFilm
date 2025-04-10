import React, { useState, useEffect } from "react";
import { img_300, unavailable } from "../Components/config";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";
import Search from "./Search";

const Trending = () => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=3d820eab8fd533d2fd7e1514e86292ea&page=${page}`
    );
    const dataJ = await data.json();
    setState(dataJ.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <>
<Search />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="py-12 my-8">
          <div className="text-2xl font-bold underline flex justify-center items-center mb-8">
            <h4 className="text-2xl">Trending Today</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {state.map((Val) => {
              const {
                name,
                title,
                poster_path,
                first_air_date,
                release_date,
                media_type,
                id,
              } = Val;

              return (
                <div key={id} className="flex justify-center">
                  <div className="bg-gray-900 text-white rounded-lg shadow-md w-72">
                    <img
                      src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                      alt={title}
                      className="w-full h-96 object-cover pt-3 pb-0 px-3 rounded-lg"
                    />
                    <div className="p-4">
                      <h5 className="text-center text-lg font-semibold mb-2">
                        {title || name}
                      </h5>
                      <div className="flex justify-evenly text-sm text-gray-300">
                        <div>{media_type === "tv" ? "TV" : "Movie"}</div>
                        <div>{first_air_date || release_date}</div>
                      <Link 
                        to={`/Infocard/${id}`} 
                        className="text-white-400 hover:underline"
                      >
                        Information
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    </>
  );
};

export default Trending;
