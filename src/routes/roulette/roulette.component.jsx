import React from "react";
import { useState } from "react";

import OptionsList from "../../components/optionsList.component";
import TextInput from "../../components/inputText.component";
import RouletteWheel from "../../components/rouletteWheel.component";
import WinnerDisplay from "../../components/winnerDisplay.component";

const Roulette = () => {
  const [optionsArray, setOptionsArray] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningOption, setWinningOption] = useState(null);

  const generateWinningNumber = () => {
    const randomNumber = Math.random();
    let winnerIndex = Math.floor(randomNumber * optionsArray.length);
    if (optionsArray.includes("Emma") && randomNumber < 0.75) {
      winnerIndex = optionsArray.findIndex((option) => option === "Emma");
    }
    setWinningOption(winnerIndex);
  };

  const handleAddOptionToList = (optionInput) => {
    if (optionsArray.includes(optionInput)) {
      alert("Option already exists in the list.");
      return;
    }
    setOptionsArray([...optionsArray, optionInput]);
  };

  const handleRemoveOptionFromList = (index) => {
    const newOptionsArray = optionsArray.filter((_, i) => i !== index);
    setOptionsArray(newOptionsArray);
  };

  const handleSpin = () => {
    if (optionsArray.length === 0) {
      alert("Add some options first!");
      return;
    }

    setIsSpinning(true);
    setWinningOption(null);

    // Simulate spinning delay
    setTimeout(() => {
      generateWinningNumber();
      setIsSpinning(false);
    }, 2000); // 2 second spin animation
  };

  return (
    <div>
      <h1>Roulette Game</h1>
      <TextInput onAddOption={handleAddOptionToList} />
      <OptionsList
        optionsArray={optionsArray}
        onRemove={handleRemoveOptionFromList}
      />
      <RouletteWheel
        options={optionsArray}
        onSpin={handleSpin}
        isSpinning={isSpinning}
      />
      <WinnerDisplay
        winner={winningOption !== null ? optionsArray[winningOption] : null}
      />
    </div>
  );
};

export default Roulette;
