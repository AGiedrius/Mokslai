// const fetchPokemonAPI = (id) =>
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err));

//   const fetchPokemon = async (id) => {
//     try {
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//       const data = await res.json();
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   fetchPokemon(5000);
//   fetchPokemonAPI(5000);

const fetchUserData = async (id) => {
  try {
    const resurs = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await resurs.json();
    if (!resurs.ok) {
      throw new Error("User not found");
    } else {
      console.log("User Name:  " + data.name);
    }
    // catch {if (resurs = instanceof)}
  } catch (error) {
    console.error(error);
  }
};
fetchUserData(999);
