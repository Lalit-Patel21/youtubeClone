import React from "react";
import Button from "./Button";

// const list = [
//   "All",
//   "Gaming",
//   "Songs",
//   "Live",
//   "Cricket",
//   "Cooking",
//   "News",
//   "Music"
// ];

const ButtonsList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Music" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
    </div>
  );
};

export default ButtonsList;
