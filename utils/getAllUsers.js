module.exports = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    if (!result) throw new Error(`Fetching ${url} failed`);
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
