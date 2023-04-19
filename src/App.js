import SearchBar from "./components/SearchBar";
// import axios from "axios";
import SearchList from "./components/SearchList";
import { useState, useEffect } from "react";
import Switcher from "./components/Switcher";

function App() {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState("");

  const fetchUserData = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}
    `)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWords(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, [word]);

  const getValue = (item) => {
    setWord(item);
  };

  return (
    <div className="flex flex-col  pt-8 px-10 min-h-screen dark:bg-gray-900  ">
      <div className="max-w-3xl  flex    flex-col  mx-auto w-full ">
        <div className="flex items-center justify-between mb-8  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="38"
            viewBox="0 0 34 38"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#838383"
              strokeLinecap="round"
              strokeWidth="1.5"
            >
              <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
              <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
              <path d="M11 9h12" />
            </g>
          </svg>
          <Switcher />
        </div>
        <div className="mb-8  ">
          <SearchBar onCreate={getValue} />
        </div>
        <div className="dark:text-white">
          <SearchList words={words} />
        </div>
      </div>
    </div>
  );
}

export default App;

// const fetchUserData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setUsers(data);
//     });
// };

// useEffect(() => {
//   fetchUserData();
// }, []);
