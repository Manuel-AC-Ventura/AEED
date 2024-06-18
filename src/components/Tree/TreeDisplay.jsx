

export const TreeDisplay = ({ root, preorderTraversal, inorderTraversal, postorderTraversal }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-white">Pré-ordem: {preorderTraversal(root).join(', ')}</h3>
    <h3 className="text-white">Em ordem: {inorderTraversal(root).join(', ')}</h3>
    <h3 className="text-white">Pós-ordem: {postorderTraversal(root).join(', ')}</h3>
  </div>
);