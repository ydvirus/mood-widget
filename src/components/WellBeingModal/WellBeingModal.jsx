import React, { useState } from "react";
import "../../styles/WellbeingModal.css";

const WellbeingModal = ({ onContinue }) => {
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  const feelings = [
    { emoji: "😔", text: "Terrible" },
    { emoji: "🙁", text: "Bad" },
    { emoji: "😐", text: "Alright" },
    { emoji: "🙂", text: "Pretty Good" },
    { emoji: "😁", text: "Fantastic" },
  ];

  return (
    <div className="modal">
      <div className="modal-content">
        <header>
            <button onClick={onContinue} >back btn</button>
        <h2>Wellbeing Check-in</h2>
        <button onClick={onContinue}>cross</button>
        </header>
        <p>Hello! How are you feeling today?</p>

        <div className="feeling-options">
          {feelings.map((feeling) => (
            <button
              key={feeling.text}
              onClick={() => setSelectedFeeling(feeling)}
              className={selectedFeeling === feeling ? "selected" : ""
              }
            >
                <span>{feeling.emoji}</span>
                <span>{feeling.text}</span>
              {/* <div className="emoji">
                {feeling.text}
                <span style="font-size: 24px; color: red;">
                  {feeling.emoji}
                </span>
              </div> */}
            </button>
          ))}
        </div>

        <button
          className="continue-button"
          disabled={!selectedFeeling}
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WellbeingModal;
