import { addSkeletonBeforeLoading } from "./Functions/display Functionality/addSkeletonBeforeLoadingData";
import { appendingValuesToThePage } from "./Functions/display Functionality/appendingValuesToThePage";
import { removeSkeletonBeforeAppending } from "./Functions/display Functionality/removeSkeletonBeforeAppending";
import { fetchWeatherDataRequest } from "./Functions/fetchData Functionality/fetchWeatherDataRequest";
import { returningDataAfterFetching } from "./Functions/fetchData Functionality/request/returningDataAfterFetching";
import { returnsValueFromTheSearchBar } from "./Functions/fetchData Functionality/returnsValueFromTheSearchBar";
import "./style.css";

(async () => {
  const Data = await fetchWeatherDataRequest("Islamabad");

  removeSkeletonBeforeAppending(Data);

  await appendingValuesToThePage(Data);
})();

const searchBar = document.getElementById("search-weather");
if (!searchBar) throw new Error("Search");

searchBar.addEventListener("keydown", async (event) => {
  if (event.key == "Enter") {
    const check = returnsValueFromTheSearchBar();

    const displayNone = addSkeletonBeforeLoading(check);
    if (displayNone) {
      const Data = await returningDataAfterFetching().catch((Error) => {
        console.error("Error:", Error);
      });
      removeSkeletonBeforeAppending(Data);
    }
  }
});

console.log("Hello, TypeScript with Webpack and Tailwindcss!");
