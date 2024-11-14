const fetchUserData = async (userId) => {
  try {
    const resurs = await fetch(
      ` https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await resurs.json();
    if (!resurs.ok) {
      throw new Error("User not found");
    } else {
      document.querySelector("#user-info").innerHTML =
        "User Name:  " + data.name;
    }
    // catch {if (resurs = instanceof)}
  } catch (error) {
    document.querySelector("#user-info").innerHTML = error;
  }
};
fetchUserData(1000);
