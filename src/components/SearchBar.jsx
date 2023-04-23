import { GoSearch } from "react-icons/go";
import { useState } from "react";

const SearchBar = ({ onCreate }) => {
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(item);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className=" relative ">
          <button className="absolute right-6 top-3">
            <GoSearch className="text-purple-700 text-bold" />
          </button>
          <input
            className="rounded-lg bg-gray-300 outline-none w-full block py-2  pl-4   placeholder-black "
            placeholder="Search a word"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
