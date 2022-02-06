import Node from "./Node";
import { useState, useCallback, useReducer, useRef } from "react";

const width = 1000;
const height = 600;

const createNode = (nodes) => {
  let newNodes = {
    name: nodes.length,
    infected: false,
    connections: [],
    top: Math.floor(Math.random() * height),
    left: Math.floor(Math.random() * width),
    focused: false,
  };
  return newNodes;
};

const moveNode = (nodes, index, event, canvas) => {
  console.log(canvas);
  const left = event.pageX - canvas.offsetLeft;
  const top = event.pageY - canvas.offsetTop;
  console.log(
    event.pageX,
    event.pageY,
    event.target.offsetLeft,
    event.target.offsetTop,
    left,
    top
  );
  nodes[index] = { ...nodes[index], left: left, top: top };
  return nodes;
};

const nodeReducer = (state, action) => {
  let newState;
  console.log(action);
  switch (action.type) {
    case "addNode":
      newState = { ...state, nodes: [...state.nodes, createNode(state.nodes)] };
      break;
    case "focusNode":
      newState = { ...state, focusedIndex: action.index };
      break;
    case "unfocusNode":
      newState = {
        ...state,
        focusedIndex: null,
      };
      break;
    case "moveNode":
      newState = {
        ...state,
        nodes: moveNode(state.nodes, action.index, action.event, action.canvas),
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

const initialState = {
  nodes: [],
  focusedIndex: null,
};

function Canvas() {
  const canvas = useRef(null);
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
        ref={canvas}
        style={{
          background: "lightblue",
          height: height + "px",
          width: width + "px",
          position: "relative",
        }}
        onMouseUp={(event) => {
          if (event.button == 0) dispatch({ type: "unfocusNode" });
        }}
        onMouseMove={(event) => {
          if (
            state.focusedIndex != null &&
            event != undefined &&
            event.button == 1
          ) {
            dispatch({
              type: "moveNode",
              index: state.focusedIndex,
              event: event,
              canvas: canvas.current,
            });
          }
        }}
      >
        {state.nodes.map((node, index) => {
          return (
            <Node
              key={node.name}
              {...node}
              focusNode={() => {
                dispatch({ type: "focusNode", index: index });
              }}
            ></Node>
          );
        })}
      </div>
    </div>
  );
}

export default Canvas;
