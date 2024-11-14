const fetchUserData = async (id) => {
  try {
    const resurs = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await resurs.json();
    if (resurs.status === 404) {
      throw new Error("User not found");
    } else {
      console.log("User Name:  " + data.name);
    }
    // catch {if (resurs = instanceof)}
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Network kaput");
    } else console.error(error);
  }
};
fetchUserData(9);
