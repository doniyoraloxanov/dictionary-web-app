const Definations = ({ meaning }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-8">
        <div className="font-semibold text-2xl">{meaning.partOfSpeech}</div>
        <div className="border-b-[1px] border-gray-400  w-full mt-2 dark:border-purple-300"></div>
      </div>

      <div className="mb-4 text-gray-500 text-semiBold">Meaning</div>
      <div className="mb-4 mt-4">
        <ul className="list-disc  ml-8 ">
          {meaning.definitions.map((def, index) => (
            <li className="mb-4 text-md " key={index}>
              {def.definition}

              <p className="ml-2"> {def.example && `"${def.example}"`} </p>
            </li>
          ))}
        </ul>

        {/* Synonyms */}
        <div className="flex space-x-4 ">
          <p>Synonyms</p>
          <div className="flex space-x-2 text-purple-500 text-bold text-xl flex-wrap">
            {meaning.synonyms.map((syn, index) => (
              <p key={index}>{syn}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Definations;
