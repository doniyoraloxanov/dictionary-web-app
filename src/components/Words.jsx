import Definations from "./Definations";

const Words = ({ word }) => {
  const definations = word.meanings.map((meaning, index) => {
    return <Definations key={index} meaning={meaning} />;
  });

  const getAudio = () => {
    const phoneticArr = word.phonetics;
    let audioSrc = "";

    for (const obj of phoneticArr) {
      if (obj.audio !== "") {
        audioSrc = obj.audio;
      }
    }

    return audioSrc;
  };

  const handleAudio = () => {
    const audioSrc = new Audio(getAudio());

    audioSrc.play().catch((error) => console.log("no audio source"));
  };

  return (
    <div>
      {/* Audio Container */}
      <div className="mb-4 flex items-center  space-y-2  justify-between  ">
        <div>
          <h2 className="font-bold text-4xl tracking-wide mb-2">{word.word}</h2>

          <p className="text-lg text-purple-400 text-bold">{word.phonetic}</p>
        </div>

        {/* Audio */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 75 75"
            onClick={handleAudio}
          >
            <g fill="#A445ED" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </div>
      </div>
      {/* Definations */}
      <div>{definations}</div>
    </div>
  );
};

export default Words;
