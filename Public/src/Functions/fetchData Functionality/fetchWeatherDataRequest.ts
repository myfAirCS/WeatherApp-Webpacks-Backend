export const fetchWeatherDataRequest = async (cityname: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
        "x-rapidapi-key": "7d1d9057fbmshc5d335cf816170ep1b9fd0jsn39cb29b48c9d",
      },
    };

    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=94954c60ca7f45d3909120202240907&q=${cityname}&aqi=no`,
      options
    ).then((Data) => {
      return Data.json();
    });

    console.log(response);

    return response;
  } catch (error) {
    console.error("Error : ", error);
  }
};
