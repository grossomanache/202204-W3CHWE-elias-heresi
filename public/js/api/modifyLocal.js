const localUrl = "https://pokemon-local-repository.herokuapp.com/pokemon";
const addToLocalApi = async (url) => {
  const response = await fetch(localUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: url,
    }),
  });
  await response.json();
};

export default addToLocalApi;
