import React from 'react';
import Tree from 'react-d3-tree';

const BinaryTreeDisplay = ({ root }) => {
  // Função para converter a estrutura da árvore binária para o formato esperado por react-d3-tree
  const convertToD3Format = (node) => {
    if (!node) return null; // Retorna null para nós nulos
    // Cria um objeto para o nó atual com 'name' e 'children' (se houver)
    const nodeObject = {
      name: String(node.value),
      children: [node.left, node.right].filter(Boolean).map(convertToD3Format).filter(Boolean), // Filtra nós nulos
    };
    return nodeObject;
  };

  const treeData = convertToD3Format(root) ? [convertToD3Format(root)] : [];

  // Verifica se treeData está vazio ou malformado antes de renderizar
  if (!treeData.length) {
    return <p className='text-black'>Árvore vazia ou dados inválidos.</p>;
  }

  return (
    <div className="overflow-auto max-h-screen p-4 border" style={{ width: '100%', height: '70vh' }}>
      <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
        <Tree data={treeData} orientation="vertical" />
      </div>
    </div>
  );
};

export default BinaryTreeDisplay;
