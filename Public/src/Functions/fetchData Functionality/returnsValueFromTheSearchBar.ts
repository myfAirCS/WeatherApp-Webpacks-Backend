export function returnsValueFromTheSearchBar(): string {
  try {
    const searchBarInputField = document.getElementById(
      "search-weather"
    ) as HTMLInputElement;

    if (!searchBarInputField.value) {
      alert("Search Bar can't be empty");

      return "";
    }

    return searchBarInputField.value;
  } catch (error) {
    console.error("Error : ", error);
    return "Error";
  }
}
