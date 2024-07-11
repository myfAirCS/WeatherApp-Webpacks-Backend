export const clearSearchBar = () => {
  try {
    const searchBar = document.getElementById(
      "search-weather"
    ) as HTMLInputElement;
    if (!searchBar) throw new Error("Search bar element not found");
    searchBar.value = "";
  } catch (error) {
    console.log(error);
  }
};
