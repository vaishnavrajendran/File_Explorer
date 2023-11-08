const useTraverseTree = () => {
  const insertNode = (tree, folderId, folderName, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: folderName,
        isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, folderName, isFolder);
    });
    return { ...tree, items: latestNode };
  };
  return { insertNode };
};

export default useTraverseTree;
