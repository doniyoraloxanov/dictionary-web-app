import Words from "./Words";

const SearchList = ({ words }) => {
  const renderedWords = words.map((word, i) => {
    return <Words word={word} key={i} />;
  });

  return <div>{renderedWords}</div>;
};

export default SearchList;
