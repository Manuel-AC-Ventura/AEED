import { useState } from 'react';
import { insertIntoTree, preorderTraversal, inorderTraversal, postorderTraversal } from '../components/Tree/TreeFunctions';
import { NumberForm } from '../components/NumberForm';
import { TreeDisplay } from '../components/Tree/TreeDisplay';
import BinaryTreeDisplay from '../components/Tree/BinaryTreeDisplay';

export const Tree = () => {
  const [root, setRoot] = useState(null);
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = Number(number);
    if (!isNaN(num)) {
      setRoot((prevRoot) => insertIntoTree(prevRoot, num));
      setNumber('');
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <NumberForm number={number} setNumber={setNumber} handleSubmit={handleSubmit} />
      <TreeDisplay root={root} preorderTraversal={preorderTraversal} inorderTraversal={inorderTraversal} postorderTraversal={postorderTraversal} />
      <div className='container bg-zinc-300 p-4 rounded-md'>
        <BinaryTreeDisplay root={root} />
      </div>
    </div>
  );
}; 