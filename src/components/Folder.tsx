import { useState } from "react";

export const Folder = ({ explorer }) => {
  console.log("ITEM", explorer);
  const [files, setFiles] = useState(explorer);
  const [hidefs, setHidefs] = useState(true);
  const [showInput, setShowInput] = useState({
    isFolder: false,
    visibility: false
  });

  const handleFolders = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      isFolder: isFolder,
      visible: true
    });
  };

  if (files.isFolder) {
    return (
      <div key={files?.id}>
        <div className="folder" onClick={() => setHidefs((prev) => !prev)}>
          <span style={{ cursor: "pointer" }}>📁 {files.name}</span>
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
              />
            </div>
          )}

          {files.items.map((item) => (
            <Folder explorer={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
};
