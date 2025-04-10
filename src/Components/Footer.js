import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const data = [
    {
      icon: "fas fa-fire-alt",
      name: "Trending",
      link: "/",
      id: 1,
    },
    {
      icon: "fas fa-film",
      name: "Movies",
      link: "/movies",
      id: 2,
    },
    {
      icon: "fas fa-tv",
      name: "TV Series",
      link: "/tv",
      id: 3,
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-6">
      <div className="flex justify-center space-x-8">
        {data.map((Val) => (
          <NavLink to={Val.link} key={Val.id}>
            <button className="flex flex-col items-center bg-gray-900 hover:bg-gray-700 rounded-lg p-4">
              <i className={`${Val.icon} text-3xl`} id="fire"></i>
              <h5 className="pt-2 text-sm">{Val.name}</h5>
            </button>
          </NavLink>
        ))}
      </div>
      <div className="text-center mt-4 text-sm">
        takhna Technologies
      </div>
    </div>
  );
};

export default Footer;
