import Words from "./Words";
import { useContext } from "react";
import WordsConetxt from "../context/words-context";

const SearchList = () => {
  const { words } = useContext(WordsConetxt);

  const renderedWords = words.map((word, i) => {
    return <Words word={word} key={i} />;
  });
  return <div> {renderedWords}</div>;
};

export default SearchList;
