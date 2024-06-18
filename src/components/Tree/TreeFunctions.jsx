import { TreeNode } from './TreeNode';

export const insertIntoTree = (root, value) => {
  if (!root) {
    return new TreeNode(value);
  }
  if (value === root.value) {
    return root;
  }
  if (value < root.value) {
    root.left = insertIntoTree(root.left, value);
  } else {
    root.right = insertIntoTree(root.right, value);
  }
  return root;
};
export const preorderTraversal = (root, result = []) => {
  if (root) {
    result.push(root.value);
    preorderTraversal(root.left, result);
    preorderTraversal(root.right, result);
  }
  return result;
};

export const inorderTraversal = (root, result = []) => {
  if (root) {
    inorderTraversal(root.left, result);
    result.push(root.value);
    inorderTraversal(root.right, result);
  }
  return result;
};

export const postorderTraversal = (root, result = []) => {
  if (root) {
    postorderTraversal(root.left, result);
    postorderTraversal(root.right, result);
    result.push(root.value);
  }
  return result;
};

export const removeFromTree = (root, value) => {
  if (!root) {
    return null;
  }
  if (value < root.value) {
    root.left = removeFromTree(root.left, value);
  } else if (value > root.value) {
    root.right = removeFromTree(root.right, value);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }
    root.value = findMinValue(root.right);
    root.right = removeFromTree(root.right, root.value);
  }
  return root;
};

const findMinValue = (node) => {
  let current = node;
  while (current.left) {
    current = current.left;
  }
  return current.value;
};