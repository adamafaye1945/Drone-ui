import { DeployedDroneInformation } from "../../types/droneTypes";

interface TrieNode {
  children: Map<string, TrieNode>;
  drone?: DeployedDroneInformation;
  endOfWord: boolean;
}
export class Trie {
  result: DeployedDroneInformation[] = [];

  root: TrieNode;
  constructor(deployedDroneInitial?: DeployedDroneInformation[]) {
    this.root = { endOfWord: false, children: new Map<string, TrieNode>() };
    if (deployedDroneInitial) {
      for (let droneObj of deployedDroneInitial) {
        this.insert(droneObj.information.model, droneObj);
      }
    }
  }
  debug() {
    function debugging(node: TrieNode) {
      if (node.endOfWord) {
        console.log(node.drone);
      }
      for (const child of node.children.values()) {
        debugging(child);
      }
    }
    debugging(this.root);
  }
  delete(word: string): boolean {
    const deleteRecursive = (node: TrieNode, depth: number): boolean => {
      if (!node) return false;

      if (depth === word.length) {
        if (!node.endOfWord) return false;
        node.endOfWord = false;
        node.drone = undefined;
        return node.children.size === 0;
      }

      const letter = word[depth];
      const childNode = node.children.get(letter);
      if (!childNode) return false;

      const shouldDeleteChild = deleteRecursive(childNode, depth + 1);

      if (shouldDeleteChild) {
        node.children.delete(letter);
        return node.children.size === 0 && !node.endOfWord;
      }

      return false;
    };

    return deleteRecursive(this.root, 0);
  }
  dfs(node: TrieNode) {
    if (node.endOfWord && node.drone) {
      this.result.push(node.drone);
    }
    for (const childNode of node.children.values()) {
      this.dfs(childNode);
    }
  }
  insert(word: string, drone: DeployedDroneInformation) {
    let cur = this.root;
    for (let letter of word) {
      if (!cur.children.has(letter)) {
        cur.children.set(letter, {
          endOfWord: false,
          children: new Map<string, TrieNode>(),
        });
      }
      cur = cur.children.get(letter)!;
    }
    cur.endOfWord = true;
    cur.drone = drone;
  }
  search(word: string): DeployedDroneInformation[] | undefined {
    let cur = this.root;
    for (let letter of word) {
      if (!cur.children.has(letter)) return undefined;
      cur = cur.children.get(letter)!;
    }
    // deep search
    this.dfs(cur);
    const resultCopy = this.result;
    this.result = [];
    return resultCopy;
  }
}
