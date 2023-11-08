import React from "react";
import { useState } from "react";

export const Folder = ({ handleInsertNode, explorer }) => {
  const [hidefs, setHidefs] = useState(true);
  const [showInput, setShowInput] = useState({
    isFolder: false,
    visibility: false,
  });

  const handleFolders = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      isFolder: isFolder,
      visible: true,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div key={explorer?.id}>
        <div className="folder" onClick={() => setHidefs((prev) => !prev)}>
          <span style={{ cursor: "pointer" }}>📁 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleFolders(e, true)}>Folder + </button>
            <button
              style={{ marginLeft: 10 }}
              onClick={(e) => handleFolders(e, false)}
            >
              File +{" "}
            </button>
          </div>
        </div>
        <div style={{ display: hidefs ? "none" : "block", paddingLeft: 25 }}>
          {showInput?.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                className="inputContainer__input"
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={onAddFolder}
              />
            </div>
          )}

          {explorer.items.map((item) => (
            <Folder
              handleInsertNode={handleInsertNode}
              explorer={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
};
