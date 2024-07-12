export const storeCountryToSessionStorage = (CountryName: string) => {
  console.log("Store : ", CountryName);
  sessionStorage.setItem("CountryName", CountryName);
};
