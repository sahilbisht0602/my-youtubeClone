import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex p-2 m-2 items-center col-span-1">
        <button className="cursor-pointer" onClick={handleToggleMenu}>
          <img
            className="h-8 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          />
        </button>
        <a href="/">
          <img
            className="h-12 mx-2 "
            src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 flex items-center">
        <input
          type="text"
          className="border border-slate-500 h-10 w-1/2 p-3 rounded-l-full"
        />
        <button className="border border-slate-500 h-10 rounded-r-full p-3 flex justify-center items-center">
          <img
            className="h-6 cursor-pointer"
            src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
          />
        </button>
      </div>
      <div className="col-span-1 flex items-center">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
