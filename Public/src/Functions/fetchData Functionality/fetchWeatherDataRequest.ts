export const fetchWeatherDataRequest = async (cityname: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.API_KEY}`,
      },
    };

    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=94954c60ca7f45d3909120202240907&q=${cityname}&aqi=no`,
      options
    );

    if (response.ok) {
      const Data = await response.json();
      console.log(Data);

      return Data;
    }

    alert("Error : While Fetching Data");
  } catch (error) {
    console.error("Error : ", error);
  }
};
