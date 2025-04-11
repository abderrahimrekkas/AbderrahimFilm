import React, { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Chaque fois darkMode ybdl, nsift class l body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [darkMode]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center w-100 text-uppercase p-3 header">
            <div className="d-flex align-items-center">
              <i className="fas fa-video"></i> &nbsp;&nbsp; The Movie Central
            </div>
            <button
              className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Mode Clair" : "🌙 Mode Sombre"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
