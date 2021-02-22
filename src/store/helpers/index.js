import axios from "axios";

export const helpFetchBeer = async () =>
  await axios.get("https://api.punkapi.com/v2/beers?page=2&per_page=80");
