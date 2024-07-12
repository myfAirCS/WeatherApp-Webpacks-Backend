import { changeElementToBlock } from "../../utils/changeElementToBlock";
import { hideElement } from "../../utils/hideElement";

export const addSkeletonBeforeLoading = (check: string): boolean => {
  if (check == "") return false;
  const detailSkeleton = document.getElementById("weather-detail-skeleton");

  const skeletonMain = document.getElementById("skeleton-main");
  const temperature = document.getElementById("temperature");
  const city = document.getElementById("city");
  const timeDate = document.getElementById("time-date");
  const condition = document.getElementById("condition");
  const detailVals = document.getElementById("detail-vals");

  if (skeletonMain) changeElementToBlock(skeletonMain);
  if (detailSkeleton) changeElementToBlock(detailSkeleton);

  if (temperature) hideElement(temperature);
  if (city) hideElement(city);
  if (timeDate) hideElement(timeDate);
  if (condition) hideElement(condition);

  if (detailVals) hideElement(detailVals);
  return true;
};
