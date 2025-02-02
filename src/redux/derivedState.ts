import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store/store";
import { Trie } from "../components/search/trieImplementation";
const deployedDrones = (state: RootState) => state.drone.deployed;
const searchQuery = (state: RootState) => state.drone.searchQuery;

export const searchTrie = createSelector([deployedDrones], (deployedDrones) => {
  const trie = new Trie();
  if (deployedDrones) {
    deployedDrones.forEach((element) =>
      trie.insert(element.information.model, element)
    );
  }
  return trie;
});
export const selectFilteredDrones = createSelector(
  [searchQuery, searchTrie, deployedDrones],
  (searchQuery, searchTrie, deployedDrones) => {
    if (!searchQuery) return deployedDrones;
    return searchTrie.search(searchQuery);
  }
);
