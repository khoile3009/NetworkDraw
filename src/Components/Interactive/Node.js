// TODO: Move this to a separate env file
const size = 40;

function Node(props) {
  let top = props["top"];
  let left = props["left"];
  return (
    <div
      onMouseDown={(event) => {
        if (event.button == 0) props.focusNode();
      }}
      onContextMenu={(event) => {
        event.preventDefault();
      }}
      style={{
        zIndex: 3,
        background: "white",
        color: "black",
        width: size + "px",
        height: size + "px",
        borderRadius: "100%",
        border: "2px solid black",
        position: "absolute",
        left: left - size / 2 + "px",
        top: top - size / 2 + "px",
      }}
    >
      <p
        style={{
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        }}
      >
        {props["name"]}
      </p>
    </div>
  );
}

export default Node;
