import React, { useReducer } from "react";
import "./home.css";

//todo: reducer working here ...
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return action.text;
    case "UPPER":
      return state.toUpperCase();
    case "LOWER":
      return state.toLowerCase();
    case "CLEAR":
      return (state = "");
    case "COPY":
      navigator.clipboard.writeText(state);
      return state;
    case "REMOVE_SPACE":
      return state.replace(/\s+/g, ' ');
    default:
      return state;
  }
};

//todo: main function
function Home() {
  const initialState = "";
  const [state, dispatch] = useReducer(reducer, initialState);

  //todo: render components 
  return (
    <main>
      <h2>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h2>
      <div className="textarea">
        <label htmlFor="input-text">Enter Your Text Here: </label>
        <textarea
          cols="30"
          rows="10"
          value={state}
          onChange={(e) =>
            dispatch({
              type: "SET_TEXT",
              text: e.target.value,
            })
          }
        ></textarea>
      </div>

      {/* buttons group  */}

      <div className="btns">
        <button onClick={() => dispatch({ type: "UPPER" })}>
          Convert Uppercase
        </button>
        <button onClick={() => dispatch({ type: "LOWER" })}>
          Convert Lowercase
        </button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear Text</button>
        <button onClick={() => dispatch({ type: "COPY" })}>
          Copy To Clipboard
        </button>
        <button onClick={() => dispatch({ type: "REMOVE_SPACE" })}>
          Remove Extra Spaces
        </button>
      </div>
    </main>
  );
}

export default Home;
