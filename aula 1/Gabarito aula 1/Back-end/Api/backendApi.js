import axios from "axios";

const URL = "http://localhost:3000"; // Ou onde quer que seu backend precise acessar

export async function fetchArtists() {
  const response = await axios.get(`${URL}/artists`);
  return response.data;
}

export async function fetchSongs() {
  const response = await axios.get(`${URL}/songs`);
  return response.data;
}
