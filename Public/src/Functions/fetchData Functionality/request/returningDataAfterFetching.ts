import { fetchWeatherDataRequest } from "../fetchWeatherDataRequest";
import { returnsValueFromTheSearchBar } from "../returnsValueFromTheSearchBar";

export async function returningDataAfterFetching() {
  try {
    const cityname: string = returnsValueFromTheSearchBar();
    if (cityname != "") {
      const weatherDetails = await fetchWeatherDataRequest(cityname);

      return weatherDetails;
    }
    return "";
  } catch (error) {
    console.log(error);
  }
}
