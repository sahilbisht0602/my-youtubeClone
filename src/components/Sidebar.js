import React from "react";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const isMenuShown = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuShown) return null;
  return (
    <div className="shadow-lg p-5 w-[12rem]">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold mt-4">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold  mt-4">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
