import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center max-w-lg mx-auto space-y-6">
      <h3 className="text-2xl text-bold dark:text-white text-gray-700 ">
        No definitions found
      </h3>

      <p className="text-gray-600 dark:text-gray-400">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at a later time or head to the web
        instead
      </p>
    </div>
  );
};

export default ErrorPage;
