import { changeElementToBlock } from "../../utils/changeElementToBlock";
import { clearSearchBar } from "../../utils/clearSearchBar";
import { hideElement } from "../../utils/hideElement";
import { appendingValuesToThePage } from "./appendingValuesToThePage";

export const removeSkeletonBeforeAppending = async (Data: any) => {
  const skeletonMain = document.getElementById("skeleton-main");
  const skeletonDetails = document.getElementById("weather-detail-skeleton");
  const temperature = document.getElementById("temperature");
  const city = document.getElementById("city");
  const timeDate = document.getElementById("time-date");
  const condition = document.getElementById("condition");
  const detailVals = document.getElementById("detail-vals");

  if (Data == "") return;

  if (skeletonMain) hideElement(skeletonMain);
  if (skeletonDetails) hideElement(skeletonDetails);

  if (temperature) changeElementToBlock(temperature);
  if (city) changeElementToBlock(city);
  if (timeDate) changeElementToBlock(timeDate);
  if (condition) changeElementToBlock(condition);

  if (detailVals) changeElementToBlock(detailVals);

  await appendingValuesToThePage(Data);
  clearSearchBar();
};
