import axios from "axios";

export const GetAllLocation = async (page) => {
  const response = await axios.get(`https://rickandmortyapi.com/api/location`, {
    params: {
      page: page,
    },
  });

  if (response.status === 200) {
    return response.data.results;
  } else return [];
};

export const GetAllLocationAllPages = async () => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/location?page=1`
  );
  const response1 = await axios.get(
    `https://rickandmortyapi.com/api/location?page=2`
  );
  const response2 = await axios.get(
    `https://rickandmortyapi.com/api/location?page=3`
  );
  const response3 = await axios.get(
    `https://rickandmortyapi.com/api/location?page=4`
  );
  const response4 = await axios.get(
    `https://rickandmortyapi.com/api/location?page=5`
  );
  const response5 = await axios.get(
    `https://rickandmortyapi.com/api/location?page=6`
  );
  const response6 = await axios.get(
    `https://rickandmortyapi.com/api/location?page=7`
  );

  var responseFinal = [
    ...response.data.results,
    ...response1.data.results,
    ...response2.data.results,
    ...response3.data.results,
    ...response4.data.results,
    ...response5.data.results,
    ...response6.data.results,
  ];
  console.log(responseFinal);
  return responseFinal;
};

export const GetAllCharacters = async (page) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character`,
    {
      params: {
        page: page,
      },
    }
  );

  if (response.status === 200) {
    return response.data.results;
  } else return [];
};

export const GetCharactersDetail = async (id) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (response.status === 200) {
    return response.data;
  } else return [];
};

export const GetLocDetail = async (id) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/location/${id}`
  );

  if (response.status === 200) {
    console.log(response.data);
    return response.data;
  } else return [];
};
