import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

import "./TextInput.css";
import { PickButton } from "./PickButton";
import { EXAMPLE_PHRASEWORDS } from "../constants/example-phrasewords";

export const TextInput = (props) => {
  const [text, setText] = useState("");
  const [hasError, setHasError] = useState(false);
  const randomNumber = Math.floor(
    Math.random() * Math.floor(EXAMPLE_PHRASEWORDS.length)
  );
  const [randomPhrase] = useState(EXAMPLE_PHRASEWORDS[randomNumber]);
  const handleTextSubmit = (value) => {
    if (!value) {
      setHasError(true);
      return;
    }
    props.handleTextSubmit(value);
  };

  const handleTextChange = (event) => {
    const { value } = event.target;
    setText(value);

    if (value) {
      setHasError(false);
    }
  };

  const checkKeyPress = (event) => {
    event.key === "Enter" && handleTextSubmit(text);
  };

  const ErrorMessage = () => {
    return hasError ? (
      <p className="text-input-error-message">Tell Mr. Wit what you feeling</p>
    ) : (
      <p className="text-input-error-message">&nbsp;</p>
    );
  };

  return (
    <div className="text-input-overall-container">
      <div className="text-input-container">
        <FontAwesomeIcon className="text-input-indicator" icon={faKeyboard} />
        <input
          className="text-input-selection"
          placeholder={randomPhrase}
          type="text"
          value={text}
          onChange={(event) => handleTextChange(event)}
          onKeyPress={checkKeyPress}
        />
      </div>
      <ErrorMessage />
      <PickButton handleSubmit={() => handleTextSubmit(text)} />
    </div>
  );
};
