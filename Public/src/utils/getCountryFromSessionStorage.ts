export const getCountryFromSessionStorage = (): string => {
  const countryName: string | null = sessionStorage.getItem("CountryName");

  console.log("Gett : ", countryName);

  if (countryName != "") {
    return String(countryName);
  }

  return "";
};
