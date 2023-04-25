import { createContext, useState } from "react";

const WordsConetxt = createContext();

const Provider = function ({ children }) {
  const [words, setWords] = useState([]);
  const [error, setError] = useState(null);
  const [word, setWord] = useState("");
  const [font, setFont] = useState("");

  const options = [
    { value: "sans", label: "Sans" },
    { value: "serif", label: "Serif" },
    { value: "mono", label: "Mono" },
  ];

  const fetchUserData = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}

    `)
      .then((response) => {
        if (!response.ok) {
          throw Error("Error happened babe!");
        }

        return response.json();
      })
      .then((data) => {
        setWords(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };

  const getWord = (item) => {
    setWord(item);
  };

  const getFont = (font) => {
    setFont(font);
  };

  const valueToShare = {
    words,
    error,
    font,
    word,
    getFont,
    getWord,
    options,
    fetchUserData,
  };

  return (
    <WordsConetxt.Provider value={valueToShare}>
      {children}
    </WordsConetxt.Provider>
  );
};

export { Provider };
export default WordsConetxt;
