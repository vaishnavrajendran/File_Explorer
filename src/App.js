import { useState } from "react";
import { Folder } from "./components/Folder";
import explorer from "./data/explorer";
import useTraverseTree from "./hooks/use-traverse-tree";

import "./styles.css";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, folderName, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, folderName, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
