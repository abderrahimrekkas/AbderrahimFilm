import React, { useEffect } from "react";

interface GenreType {
  id: number;
  name: string;
}

interface GenreProps {
  genre: GenreType[];
  setGenre: (genres: GenreType[]) => void;
  setPage: (page: number) => void;
  type: string;
  value: GenreType[];
  setValue: (value: GenreType[]) => void;
}

const Genre = ({ genre, setGenre, setPage, type, value, setValue }: GenreProps) => {
  const fetchGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US`
    );
    const { genres } = await data.json();
    setGenre(genres);
  };

  useEffect(() => {
    fetchGenre();
   
  }, []);

  const CategoryAdd = (genres: GenreType) => {
    setValue([...value, genres]);
    setGenre(genre.filter((g) => g.id !== genres.id));
    setPage(1);
  };

  const CategoryRemove = (genres: GenreType) => {
    setValue(value.filter((g) => g.id !== genres.id));
    setGenre([...genre, genres]);
    setPage(1);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-2">
        {value?.map((Val) => (
          <button
            key={Val.id}
            className="px-4 py-2  bg-blue-100 rounded-md "
            onClick={() => CategoryRemove(Val)}
          >
            {Val.name}
          </button>
        ))}

        {genre?.map((Gen) => (
          <button
            key={Gen.id}
            className="px-4 py-2 bg-blue-100 text-blue rounded-md   duration-200 ease-in-out"
            onClick={() => CategoryAdd(Gen)}
          >
            {Gen.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Genre;