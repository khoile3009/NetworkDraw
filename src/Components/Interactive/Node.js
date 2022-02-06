function Node(props) {
  let top = props["top"];
  let left = props["left"];
  return (
    <div
      style={{
        background: "white",
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        border: "2px solid black",
        position: "absolute",
        left: left + "px",
        top: top + "px",
      }}
    >
      {props["name"]}
    </div>
  );
}

export default Node;
