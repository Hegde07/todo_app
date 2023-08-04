import React, { useState } from "react";
import "../App.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";
const Search = ({ addList }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleClick = () => {
    if (inputText !== "") {
      addList(inputText);
      setInputText("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      addList(inputText);
      setInputText("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        className="input-box-todo"
        placeholder="Enter Task"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <button className="add-btn" onClick={() => handleClick()}>
        +
      </button>
    </div>
  );
};

export default Search;
