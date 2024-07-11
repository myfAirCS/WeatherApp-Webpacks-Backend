import { clearSearchBar } from "../../utils/clearSearchBar";
import { appendingValuesToThePage } from "./appendingValuesToThePage";

export const removeSkeletonBeforeAppending = async (Data: any) => {
  const skeletonMain = document.getElementById("skeleton-main");
  const skeletonDetails = document.getElementById("weather-detail-skeleton");
  const temperature = document.getElementById("temperature");
  const city = document.getElementById("city");
  const timeDate = document.getElementById("time-date");
  const condition = document.getElementById("condition");
  const detailVals = document.getElementById("detail-vals");
  if (Data != "") {
    if (skeletonMain) skeletonMain.style.display = "none";
    if (skeletonDetails) skeletonDetails.style.display = "none";
    if (temperature) temperature.style.display = "block";
    if (city) city.style.display = "block";
    if (timeDate) timeDate.style.display = "block";
    if (condition) condition.style.display = "block";
    if (detailVals) detailVals.style.display = "block";

    await appendingValuesToThePage(Data);
    clearSearchBar();
  }
};
