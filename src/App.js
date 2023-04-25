import SearchBar from "./components/SearchBar";
import SearchList from "./components/SearchList";
import { useEffect, useContext } from "react";
import Switcher from "./components/Switcher";
import Dropdown from "./components/Dropdown";
import ErrorPage from "./components/ErrorPage";
import WordsConetxt from "./context/words-context";

function App() {
  const { word, error, font, fetchUserData } = useContext(WordsConetxt);

  useEffect(() => {
    if (word) {
      fetchUserData();
    }
  }, [word]);

  return (
    <div
      className={`flex flex-col  pt-8 px-10 min-h-screen dark:bg-gray-900 font-${font} `}
    >
      <div
        className={`max-w-3xl  flex flex-col  mx-auto w-full "
        }`}
      >
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
          <div className=" flex space-x-2 relative">
            <div className="absolute top-1 right-20 z-50">
              <Dropdown />
            </div>
            <Switcher />
          </div>
        </div>

        {/* Search */}
        <div className="mb-16 z-20  ">
          <SearchBar />
        </div>

        <div className="dark:text-white">
          {error && <ErrorPage />}
          {!error && <SearchList placeHolder="Sans Serif" />}
        </div>
      </div>
    </div>
  );
}

export default App;
