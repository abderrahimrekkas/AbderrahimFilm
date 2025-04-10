import React, { useState, useEffect } from "react";
import { img_300, unavailable } from "../Components/config";
import Pagination from "../Components/Pagination";
import Genre from "../Components/Genre";
import useGenre from "../useGenre";
import { Link } from "react-router-dom";

const Movies = () => {
  const [state, setState] = useState([]); // Store the fetched data
  const [page, setPage] = useState(1); // Keep track of the page numbers
  const [genre, setGenre] = useState([]); // Store the original genre values
  const [value, setValue] = useState([]); // Store the selected genre values
  const genreURL = useGenre(value);

  const fetchTrending = async () => {
    const data = await fetch(`
      https://api.themoviedb.org/3/discover/movie?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`);
    const dataJ = await data.json();
    setState(dataJ.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page, genreURL]);

  return (
    <>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-12 text-center mt-2 mb-4 fs-1 fw-bold text-decoration-underline">
            Movies
          </div>
          <Genre
            genre={genre}
            setGenre={setGenre}
            setPage={setPage}
            type="movie"
            value={value}
            setValue={setValue}
          />
          {state.map((Val) => {
            const {
              title,
              poster_path,
              release_date,
              media_type,
              id,
            } = Val;
            return (
              <div className=" col-md-3 col-sm-4 py-3" id="card" key={id}>
                <div className="card bg-gray-900 text-white rounded-lg shadow-md w-70 " key={id}>
                  <img
                    src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                    className="card-img-top pt-3 pb-0 px-3"
                    alt={title}
                  />
                  <div className="card-body">
                    <h5 className="text-center text-lg font-semibold mb-2">
                      {title}
                    </h5>
                    <div className="flex justify-evenly text-sm text-gray-300">
                      <div>{media_type === "tv" ? "TV Series" : "Movie"}</div>
                      <div>{release_date}</div>
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
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    </>
  );
};

export default Movies;