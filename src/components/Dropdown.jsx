import { useState, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const Dropdown = ({ options, placeHolder, onFont }) => {
  const [isOpen, setIsopen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});

  useEffect(() => {
    const handler = () => setIsopen(false);

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleIconChange = (e) => {
    e.stopPropagation();
    setIsopen(!isOpen);
  };

  // const getDisplay = () => {
  //   if (selectedValue) {
  //     return selectedValue.label;
  //   }

  //   return placeHolder;
  // };

  const onItemClick = (option) => {
    setSelectedValue(option);
    onFont(option.value);
  };

  return (
    <div className="relative">
      <button
        onClick={handleIconChange}
        className="text-bold text-lg   flex space-x-4 items-center  dark:text-white"
      >
        {!selectedValue.label ? "Sans Serif" : selectedValue.label}

        <span className="ml-2">
          {!isOpen ? (
            <GoChevronDown className="text-purple-500" />
          ) : (
            <GoChevronUp className="text-purple-500" />
          )}
        </span>
      </button>

      {/* Menu */}

      {isOpen && (
        <div className=" bg-white dark:bg-gray-900 dark:text-white shadow-gray-300 shadow-lg w-44 dark:shadow-purple-500  absolute right-6 top-8 rounded-md px-2 py-2 ">
          {options.map((option) => (
            <div
              key={option.key}
              className="hover:text-purple-400 cursor-pointer text-lg text-bold"
              onClick={() => onItemClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
