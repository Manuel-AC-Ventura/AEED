import React, { useReducer, useState } from 'react';
import { NumberForm } from '../components/NumberForm'; // Ajuste o caminho de importação conforme necessário

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  toArray() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value); // Certifique-se de acessar o valor do nó
      current = current.next;
    }
    return elements;
  }

  toLinkedListArray() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(`${current.value} -> ${current.next ? current.next.value : 'null'}`);
      current = current.next;
    }
    return elements;
  }
}

const actionTypes = {
  ADD_ELEMENT: 'ADD_ELEMENT',
};

function linkedListReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_ELEMENT:
      const newState = new LinkedList();
      newState.head = JSON.parse(JSON.stringify(state.head)); // Clone o estado para evitar mutações inesperadas
      newState.append(Number(action.payload));
      return newState;
    default:
      return state;
  }
}

export const List = () => {
  const [linkedList, dispatch] = useReducer(linkedListReducer, new LinkedList());
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number !== '') { // Verifica se o campo não está vazio
      dispatch({ type: actionTypes.ADD_ELEMENT, payload: number });
      setNumber(''); // Limpa o campo do formulário após adicionar o elemento
    }
  };
  const handleRemove = () => {
  // Implemente a lógica para remover o número da estrutura de dados (lista, árvore, grafo)
  // Por exemplo, para uma lista:
  if (number) {
    dispatch({ type: 'REMOVE_ELEMENT', payload: number });
    setNumber(''); // Limpa o campo de entrada após a remoção
  }
};

  return (
    <div className='flex flex-col gap-3'>
      <NumberForm number={number} setNumber={setNumber} handleSubmit={handleSubmit} handleRemove={handleRemove} />
      <div className='flex flex-row gap-4'>
        {linkedList.toLinkedListArray().map((nodeRepresentation, index) => (
          <div key={index} className='bg-gray-700 text-white p-2 rounded shadow-md'>
            {nodeRepresentation}
          </div>
        ))}
      </div>
    </div>
  );
};