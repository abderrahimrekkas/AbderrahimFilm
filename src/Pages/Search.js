import React, { useState, useEffect } from "react";
import Pagination from "../Components/Pagination";
import { img_300, unavailable } from "../Components/config";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchSearch = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    const { results } = await data.json();
    setContent(results);
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  const Search = () => {
    fetchSearch();
  };

  const Trigger = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="container">
  <div className="row pt-3 mb-5 pb-5">
    <div className="col-12 pt-5 pb-3 mt-5 d-flex justify-content-center align-items-center">
      <input
        type="text"
        placeholder="search..."
        onChange={Trigger}
        className="form-control-lg col-6 search bg-dark text-white border border-0"
      />
      <button
        className="btn btn-primary text-white mx-2 col-md-1 col-sm-2 py-2"
        onClick={Search}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>

    {content &&
      content.map((Val) => {
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
          <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center py-3" key={id}>
            <div className="card bg-dark text-white" style={{ width: "18rem" }}>
              <img
                src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                className="card-img-top"
                alt={title || name}
                style={{ height: "27rem", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center">
                  {title || name}
                </h5>
                <p className="text-center mb-0">
                  {media_type === "tv" ? "TV Show" : "Movie"}{" "}
                  {first_air_date || release_date && (
                    <span className="d-block">
                      {first_air_date || release_date}
                    </span>
                  )}
                   <Link 
                                          to={`/Infocard/${id}`} 
                                          className="text-white-400 hover:underline"
                                        >
                                          Information
                                        </Link>
                </p>
              </div>
            </div>
          </div>
        );
      })}

    {page > 1 && <Pagination page={page} setPage={setPage} />}
  </div>
</div>
  );
};

export default Search;
