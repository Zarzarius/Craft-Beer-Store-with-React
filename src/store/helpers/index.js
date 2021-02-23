import axios from "axios";

export const helpFetchBeer = async () =>
  await axios.get("https://api.punkapi.com/v2/beers?page=2&per_page=80");

export const Random = () => {
  let maxNumber = 6;
  let minNumber = 3.5;
  let randomNumber =
    Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return randomNumber;
};
