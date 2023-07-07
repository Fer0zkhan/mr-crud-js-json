const { isEmptyObject } = require("../helpers");

module.exports = async (url, id) => {
  try {
    const response = await fetch(url + `/${id}`);
    
    const result = await response.json();

    if (!result) throw new Error(`Fetching ${url} failed`);

    if (isEmptyObject(result)) return console.log("User not found");

    console.log(
      "🚀 ~ file: getAllUsers.js:5 ~ module.exports= ~ result:",
      result
    );
  } catch (error) {
    console.log(
      "🚀 ~ file: getAllUsers.js:5 ~ module.exports= ~ error:",
      error
    );
  }
};
