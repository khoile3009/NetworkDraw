import "./ContextMenu.css";

const offset = 10;
function ContextMenu({
  left,
  top,
  show,
  toggleInfection,
  deleteNode,
  createConnection,
}) {
  return (
    <div
      id="contextMenu"
      className="context-menu"
      style={{
        display: show ? "block" : "none",
        left: left + offset,
        top: top + offset,
      }}
    >
      <ul>
        <li>
          <p>Toggle Infection</p>
        </li>
        <li>
          <p>Delete Node</p>
        </li>
        <li>
          <p>Create Connection</p>
        </li>
      </ul>
    </div>
  );
}

export default ContextMenu;
