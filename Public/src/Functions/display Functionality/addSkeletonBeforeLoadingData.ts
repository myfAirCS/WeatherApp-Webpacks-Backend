export const addSkeletonBeforeLoading = (check: string): Boolean => {
  if (check != "") {
    const detailSkeleton = document.getElementById("weather-detail-skeleton");

    const skeletonMain = document.getElementById("skeleton-main");
    const temperature = document.getElementById("temperature");
    const city = document.getElementById("city");
    const timeDate = document.getElementById("time-date");
    const condition = document.getElementById("condition");
    const detailVals = document.getElementById("detail-vals");

    if (skeletonMain) skeletonMain.style.display = "block";
    if (detailSkeleton) detailSkeleton.style.display = "block";

    if (temperature) temperature.style.display = "none";
    if (city) city.style.display = "none";
    if (timeDate) timeDate.style.display = "none";
    if (condition) condition.style.display = "none";

    if (detailVals) detailVals.style.display = "none";
    return true;
  }
  return false;
};
