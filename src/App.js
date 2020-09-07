import React, { useState } from "react";
import _ from "lodash";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "./App.css";

import {
  getAnswerFrom,
  readAiResponse,
  getRandomRestaurantOption,
  getListOfRestaurants,
} from "../src/js/actions";
import { MicrophoneButton } from "./js/components/MicrophoneButton";
import { InputSelection } from "./js/components/InputSelection";
import { TextInput } from "./js/components/TextInput";
import { RestaurantResult } from "./js/components/RestaurantResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import { PickButton } from "./js/components/PickButton";
import { EXAMPLE_PHRASEWORDS } from "./js/constants/example-phrasewords";

const Transcript = (props) => {
  return props.transcript ? (
    <p className="transcript">{props.transcript}</p>
  ) : (
    <p className="transcript">&nbsp;</p>
  );
};

const ExampleVoicePhrase = () => {
  var randomNumber = Math.floor(
    Math.random() * Math.floor(EXAMPLE_PHRASEWORDS.length)
  );
  const randomPhrase = EXAMPLE_PHRASEWORDS[randomNumber];
  return <p className="example-phraseword">{randomPhrase}</p>;
};

const ErrorMessage = (props) => {
  const { hasError } = props;
  return hasError ? (
    <p className="text-input-error-message">Tell Mr. Wit what you feeling</p>
  ) : (
    <p className="text-input-error-message">&nbsp;</p>
  );
};

function App() {
  const [gettingAnswer, setGettingAnswer] = useState(false);
  const [randomPick, setRandomPick] = useState({});
  const [userUtterance, setUserUtterance] = useState("");
  const [isMicrophoneAvailable] = useState(
    SpeechRecognition.browserSupportsSpeechRecognition()
  );
  const [isErrorPresent, setIsErrorPresent] = useState(false);

  const [
    isCurrentInputSelectionVoice,
    setIsCurrentInputSelectionVoice,
  ] = useState(true);
  const {
    transcript,
    resetTranscript,
    finalTranscript,
    listening,
  } = useSpeechRecognition();

  const startOrStopListening = () => {
    if (!listening) {
      resetTranscript();
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
      handleTextSubmit(transcript);
    }
  };

  const handleSwitch = (val) => {
    setUserUtterance("");
    setRandomPick({});
    setIsCurrentInputSelectionVoice(val);
    resetTranscript();
  };

  const handleTextSubmit = async (text) => {
    if (_.isEmpty(text)) {
      setIsErrorPresent(true);
      return;
    } else {
      setIsErrorPresent(false);
    }
    setUserUtterance(text);
    await getAnswerFrom(text).then((response) => {
      const details = readAiResponse(response);
      setGettingAnswer(true);
      getListOfRestaurants(details).then((restaurantsJson) => {
        const businesses = restaurantsJson["businesses"];
        const option = getRandomRestaurantOption(businesses);
        setRandomPick(option);
        setGettingAnswer(false);
      });
    });
  };

  const content = _.isEmpty(randomPick) ? (
    <div className="input-holder">
      <div className="microphone-holder">
        {isCurrentInputSelectionVoice ? (
          isMicrophoneAvailable ? (
            <div>
              {transcript || listening ? (
                <Transcript transcript={transcript} />
              ) : (
                <ExampleVoicePhrase />
              )}
              <MicrophoneButton
                action={startOrStopListening}
                listening={listening}
              />
              <ErrorMessage hasError={isErrorPresent} />
              <PickButton handleSubmit={() => handleTextSubmit(transcript)} />
            </div>
          ) : (
            <div>
              <h3>Mr. Wit can't hear on this browser. Use text.</h3>
              <h4>Supported browsers</h4>
              <ul className="supported-browsers-list">
                <li>Chrome (desktop and Android)</li>
                <li>Microsoft Edge</li>
                <li>Android Webview</li>
                <li>Samsung Internet</li>
              </ul>
            </div>
          )
        ) : (
          <TextInput handleTextSubmit={handleTextSubmit} />
        )}
      </div>
    </div>
  ) : (
    <div className="input-holder">
      <div className="restaurant-result-holder">
        <p className="utterance">{`\"${userUtterance}\"`}</p>
        <RestaurantResult restaurant={randomPick} />
        <button
          className="redo-button"
          onClick={() => handleTextSubmit(userUtterance)}
        >
          <FontAwesomeIcon icon={faRedoAlt} />
          <span className="input-selection-button-text">
            I don't want this one
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Pick4Me</h1>
        <hr className="title-divider" />
        <p className="subtitle">
          I'm too hungry to decide where to eat. Help me Mr. Wit!
        </p>
        <p className="robot-emoji">&#129302;</p>
      </header>
      {content}
      <div className="input-selection-holder">
        <InputSelection handleSwitch={handleSwitch} />
      </div>
      {/* <Dictaphone></Dictaphone> */}
    </div>
  );
}

export default App;
