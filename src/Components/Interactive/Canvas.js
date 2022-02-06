import Node from "./Node";
import { useState, useCallback, useReducer } from "react";

const width = 1000;
const height = 600;

const createNode = (nodes) => {
  let newNodes = {
    name: nodes.length,
    infected: false,
    connections: [],
    top: Math.floor(Math.random() * height),
    left: Math.floor(Math.random() * width),
  };
  return newNodes;
};

const nodeReducer = (state, action) => {
  let newState;
  console.log(action);
  switch (action.type) {
    case "addNode":
      newState = { ...state, nodes: [...state.nodes, createNode(state.nodes)] };
  }
  return newState;
};

const initialState = {
  nodes: [],
};

function Canvas() {
  const [state, dispatch] = useReducer(nodeReducer, initialState);

  return (
    <div>
      <button
        onClick={(event) => {
          dispatch({ type: "addNode" });
        }}
      >
        Add node
      </button>
      <div
        style={{
          background: "lightblue",
          height: height + "px",
          width: width + "px",
          position: "relative",
        }}
        onClick={(event) => {
          console.log(event);
        }}
      >
        {state.nodes.map((node) => {
          return (
            <Node key={node.name} top={node["top"]} left={node["left"]}></Node>
          );
        })}
      </div>
    </div>
  );
}

export default Canvas;
