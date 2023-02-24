const baseUrl = "https://pokeapi.co/api/v2/";
const requestHeaders = {
  "content-type": "application/json",
}

export const getAllPokes = async () => {
  const allPokes = await fetch(`${baseUrl}pokemon?limit=10`, {
    method: "GET",
    headers: requestHeaders,
  }).then((response) => response.json())
  const limitPoke = allPokes.results;
  return limitPoke;
}

export const getByName = async (name) => {
    const pokemon = await fetch(`${baseUrl}pokemon/${name}`, {
        method: "GET",
        headers: requestHeaders,
    })
    .then(response => response.json())
    .then(res => {
        localStorage.setItem('pokemon', JSON.stringify(res))

        return res
    })
    .catch(error => console.log(error))

    return pokemon
}
