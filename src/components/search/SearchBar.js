import React, { useState, useEffect } from "react";

const SearchBar = ({ callBackFun, searchKey }) => {
  // const [searchKey,setSearchKey] = useState('');
  // useEffect(()=>{

  // },[searchKey])

  const searchOnChangeHandler = (e) => {
    callBackFun(e.target.value);
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="mt-20 w-1/2 ">
          {/* <label for="hs-search-box-with-loading-4" class="block text-sm font-medium mb-2 dark:text-white">Search</label> */}
          <div className="flex rounded-md shadow-sm">
            <input
              type="text"
              value={searchKey}
              onChange={searchOnChangeHandler}
              id="hs-search-box-with-loading-4"
              name="hs-search-box-with-loading-4"
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="search with title"
            />
            {/* <button
              type="button"
              className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
            > */}
              {/* <span class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
      </span> */}
              {/* Search */}
            {/* </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
