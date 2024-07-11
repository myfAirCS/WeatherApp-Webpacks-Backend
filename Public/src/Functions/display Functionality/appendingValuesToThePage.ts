export async function appendingValuesToThePage(data: any) {
  try {
    const cloudVal = document.getElementById("cloud-Val") as HTMLElement;
    const humidVal = document.getElementById("Humid-Val");
    const windVal = document.getElementById("Wind-Val");

    const temperature = document.getElementById("temperature");
    const city = document.getElementById("city");
    const timeDate = document.getElementById("time-date");
    const weatherCondition = document.getElementById("condition");

    // Check data structure
    console.log("Received data:", data["location"]);

    if (!city) throw new Error("City element not found");
    city.textContent = `${data["location"].name}, ${data.location.country}`;

    if (!timeDate) throw new Error("Time Data element not found");
    timeDate.textContent = `${data.location.localtime}, ${data.location.tz_id}`;

    if (!temperature) throw new Error("Temperature element not found");
    temperature.textContent = `${data.current.temp_c}°C`;

    if (!weatherCondition)
      throw new Error("Weather Condition element not found");
    weatherCondition.textContent = `${data.current.condition.text}`;

    if (!cloudVal) throw new Error("Cloud Value element not found");
    cloudVal.textContent = `${data.current.cloud}`;

    if (!humidVal) throw new Error("Humidity Value element not found");
    humidVal.textContent = `${data.current.humidity}`;

    if (!windVal) throw new Error("Wind Value element not found");
    windVal.textContent = `${data.current.wind_kph}`;
  } catch (Error) {
    console.log("Error:", Error);
  }
}
