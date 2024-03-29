const { isEmptyObject } = require("../helpers");

module.exports = async (url, id) => {
  try {
    const options = {
      method: "DELETE", 
      mode: "cors",
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
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
