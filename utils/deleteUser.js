const { isEmptyObject } = require("../helpers");

module.exports = async (url, id) => {
  try {
    const options = {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
    };

    const response = await fetch(url + `/${id}`, options);

    if (response.status === 404) return console.log("User Not Found");
    
    const result = await response.json();

    if (!result) throw new Error(`Fetching ${url} failed`);

    if (isEmptyObject(result)) return console.log("User Delete Successfully");
    
  } catch (error) {
    console.log("🚀 ~ file: deleteUser.js:5 ~ module.exports= ~ error:", error);
  }
};
