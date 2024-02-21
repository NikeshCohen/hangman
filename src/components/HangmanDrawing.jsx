// different parts of the hangman drawing
const bodyParts = [
  <div key="head" className="head"></div>,
  <div key="body" className="body"></div>,
  <div key="rightArm" className="r-arm"></div>,
  <div key="leftArm" className="l-arm"></div>,
  <div key="rightLeg" className="r-leg"></div>,
  <div key="leftLeg" className="l-leg"></div>,
];

//render the hangman drawing based on the number of incorrect guesses
function HangmanDrawing({ numGuesses }) {
  return (
    <div className="drawing">
      {bodyParts.slice(0, numGuesses)}{" "}
      {/* Render body parts up to the number of incorrect guesses */}
      <div className="tp-dwn"></div> {/* Render other parts of the hangman */}
      <div className="tp-overhanging"></div>
      {/* Render other parts of the hangman */}
      <div className="main"></div> {/* Render other parts of the hangman */}
      <div className="btm"></div> {/* Render other parts of the hangman */}
    </div>
  );
}

export default HangmanDrawing;
