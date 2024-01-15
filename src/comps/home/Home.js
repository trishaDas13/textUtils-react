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
      return state.replace(/\s+/g, " ");
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
      <div className="text_storage">
        {/* textarea */}
        <div className="textarea">
          <textarea
            cols="30"
            rows="10"
            value={state}
            placeholder="Write your thoughts here ...."
            onChange={(e) =>
              dispatch({
                type: "SET_TEXT",
                text: e.target.value,
              })
            }
          ></textarea>
          {/* buttons group  */}
          <div className="btns">
            <button
              onClick={() => dispatch({ type: "UPPER" })}
              disabled={state.length === 0}
              style={
                state.length === 0
                  ? { opacity: ".5", cursor: "not-allowed" }
                  : {}
              }
            >
              Convert Uppercase
            </button>
            <button
              onClick={() => dispatch({ type: "LOWER" })}
              disabled={state.length === 0}
              style={
                state.length === 0
                  ? { opacity: ".5", cursor: "not-allowed" }
                  : {}
              }
            >
              Convert Lowercase
            </button>
            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              disabled={state.length === 0}
              style={
                state.length === 0
                  ? { opacity: ".5", cursor: "not-allowed" }
                  : {}
              }
            >
              Clear Text
            </button>
            <button
              onClick={() => dispatch({ type: "COPY" })}
              disabled={state.length === 0}
              style={
                state.length === 0
                  ? { opacity: ".5", cursor: "not-allowed" }
                  : {}
              }
            >
              Copy To Clipboard
            </button>
            <button
              onClick={() => dispatch({ type: "REMOVE_SPACE" })}
              disabled={state.length === 0}
              style={
                state.length === 0
                  ? { opacity: ".5", cursor: "not-allowed" }
                  : {}
              }
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
        {/* summary area */}
        <div className="summary">
          <h3>Summary Of Your Text</h3>
          <p>
            Nummber of words :
            {
              //todo: word count
              state.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </p>
          <p>Number of charecters : {state.length}</p>
          <p>
            Reading Time:
            {
              //todo: reading time define
              0.008 *
                state.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
            }
          </p>
        </div>
      </div>

      {/* preview area */}
      <div className="preview">
        <h2>Preview Document</h2>
        <textarea
          cols="30"
          rows="10"
          value={state}
          disabled
          onChange={(e) =>
            dispatch({
              type: "SET_TEXT",
              text: e.target.value,
            })
          }
        ></textarea>
      </div>
    </main>
  );
}

export default Home;
